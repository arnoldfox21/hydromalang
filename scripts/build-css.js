const fs = require('fs');
const path = require('path');
const { compile } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');

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

  const output = compiler.build(candidates);

  fs.writeFileSync(outputPath, output, 'utf8');
  console.log(`[Tailwind] Generated ${outputPath} (${(output.length / 1024).toFixed(1)} KB).`);
}

build().catch((err) => {
  console.error('[Tailwind] Error compiling CSS:', err);
  process.exit(1);
});
