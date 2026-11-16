/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { compile } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');
const { transform } = require('lightningcss');

/**
 * Unwrap `@layer name { ... }` blocks while preserving inner CSS order,
 * and strip forward declarations like `@layer properties;`.
 */
function unwrapLayers(css) {
  let result = css.replace(/@layer\s+[^{;]+;\s*/g, '');

  const layerRegex = /@layer\s+[^{]+\{/g;
  let match;
  while ((match = layerRegex.exec(result)) !== null) {
    const start = match.index;
    const openBrace = start + match[0].length - 1;
    let depth = 1;
    let i = openBrace + 1;
    while (i < result.length && depth > 0) {
      if (result[i] === '{') depth++;
      else if (result[i] === '}') depth--;
      i++;
    }
    if (depth === 0) {
      const inner = result.slice(openBrace + 1, i - 1);
      result = result.slice(0, start) + inner + result.slice(i);
      layerRegex.lastIndex = start;
    } else {
      break;
    }
  }
  return result;
}

/**
 * Parse a CSS color string (#rgb, #rrggbb, rgb(...), rgba(...)) into [r, g, b].
 */
function parseRgbColor(colorStr) {
  const s = colorStr.trim();
  if (s.startsWith('#')) {
    const hex = s.slice(1);
    if (hex.length === 3) {
      return [
        parseInt(hex[0] + hex[0], 16),
        parseInt(hex[1] + hex[1], 16),
        parseInt(hex[2] + hex[2], 16),
      ];
    }
    if (hex.length === 6) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
      ];
    }
    if (hex.length === 8) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
      ];
    }
  }
  const rgbMatch = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
  if (rgbMatch) {
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])];
  }
  return null;
}

/**
 * Downlevel modern CSS features (color-mix, in oklab, translate/scale/rotate, @supports gates)
 * so older mobile browsers like Samsung Internet <= 21 render identically to modern browsers.
 */
function downlevelForLegacyBrowsers(css) {
  // 1. Collect resolved :root color variables (already converted from oklch to hex/rgb by lightningcss)
  const colorVars = new Map();
  const varRegex = /(--color-[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = varRegex.exec(css)) !== null) {
    const val = m[2].trim();
    if (parseRgbColor(val)) {
      colorVars.set(m[1], val);
    }
  }

  // 2. Replace color-mix(in ..., <color> <pct>%, transparent) with rgba(r, g, b, alpha)
  let out = css.replace(
    /color-mix\(\s*in\s+(?:srgb|oklab|oklch|lab|lch)\s*,\s*(var\((--color-[a-z0-9-]+)\)|#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|currentcolor)\s+([\d.]+)%\s*,\s*transparent\s*\)/gi,
    (full, colorExpr, varName, pctStr) => {
      if (colorExpr.toLowerCase() === 'currentcolor') {
        return full; // handled separately for ::placeholder
      }
      const resolved = varName ? colorVars.get(varName) : colorExpr;
      if (!resolved) return full;
      const rgb = parseRgbColor(resolved);
      if (!rgb) return full;
      const alpha = Math.round((Number(pctStr) / 100) * 1000) / 1000;
      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
    }
  );

  // 3. Handle ::placeholder color-mix(in oklab, currentcolor 50%, transparent)
  out = out.replace(
    /color:\s*color-mix\(\s*in\s+(?:srgb|oklab)\s*,\s*currentcolor\s+([\d.]+)%\s*,\s*transparent\s*\)\s*;/gi,
    (_, pct) => `color: inherit; opacity: ${Number(pct) / 100};`
  );

  // 4. Strip `in oklab` / `in oklch` / `in srgb` from gradient positions
  out = out.replace(
    /(--tw-gradient-position:\s*[^;]*?)\s+in\s+(?:oklab|oklch|srgb|hsl|hwb|lab|lch)\b/gi,
    '$1'
  );
  out = out.replace(
    /(linear-gradient\(\s*[^,)]*?)\s+in\s+(?:oklab|oklch|srgb|hsl|hwb|lab|lch)\b/gi,
    '$1'
  );

  // 5. Replace individual transform properties (translate, scale, rotate) with transform:
  out = out.replace(
    /\btranslate:\s*var\(--tw-translate-x\)\s+var\(--tw-translate-y\)\s*;/g,
    'transform: translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), 0) scale(var(--tw-scale-x, 1), var(--tw-scale-y, 1));'
  );
  out = out.replace(
    /\bscale:\s*var\(--tw-scale-x\)\s+var\(--tw-scale-y\)\s*;/g,
    'transform: translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), 0) scale(var(--tw-scale-x, 1), var(--tw-scale-y, 1));'
  );
  out = out.replace(
    /\brotate:\s*([^;]+);/g,
    'transform: rotate($1);'
  );

  // 6. Unwrap @layer blocks so Samsung Internet < 18 does not drop the entire stylesheet
  out = unwrapLayers(out);

  // 7. Unwrap the @supports gate around `*, ::before, ::after, ::backdrop` --tw-* defaults
  //    so browsers without @property still get default values for --tw-shadow, --tw-border-style, etc.
  out = out.replace(
    /@supports\s*\(\(-webkit-hyphens:\s*none\)[\s\S]*?\)\s*\{(\s*\*,\s*::before,\s*::after,\s*::backdrop\s*\{[\s\S]*?\})\s*\}/g,
    '$1'
  );

  return out;
}

async function build() {
  console.log('[Tailwind] Building CSS bundle...');
  const inputPath = path.join(__dirname, '..', 'app', 'input.css');
  const outputPath = path.join(__dirname, '..', 'app', 'globals.css');

  const css = fs.readFileSync(inputPath, 'utf8');

  const compiler = await compile(css, {
    from: inputPath,
    base: path.join(__dirname, '..'),
    onDependency: () => {},
  });

  const scanner = new Scanner({
    sources: [
      {
        base: path.join(__dirname, '..'),
        pattern: '{app,components}/**/*.{ts,tsx,js,jsx}',
        negated: false,
      },
    ],
  });

  const candidates = scanner.scan();
  console.log(`[Tailwind] Discovered ${candidates.length} class candidates.`);

  const rawOutput = compiler.build(candidates);

  // Transform with lightningcss for older mobile browsers (converts oklch -> hex/rgb, flattens nesting, adds vendor prefixes)
  const { code } = transform({
    filename: 'app/globals.css',
    code: Buffer.from(rawOutput),
    minify: false,
    targets: {
      samsung: 13 << 16,
      android: 80 << 16,
      chrome: 80 << 16,
      safari: 13 << 16,
      ios_saf: 13 << 16,
    },
  });

  const compatOutput = downlevelForLegacyBrowsers(code.toString());

  fs.writeFileSync(outputPath, compatOutput, 'utf8');
  console.log(`[Tailwind] Generated ${outputPath} (${(compatOutput.length / 1024).toFixed(1)} KB).`);
}

build().catch((err) => {
  console.error('[Tailwind] Error compiling CSS:', err);
  process.exit(1);
});
