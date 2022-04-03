const esbuild = require('esbuild');

const { sassPlugin } = require('@es-pack/esbuild-sass-plugin');

const args = process.argv.slice(2);
const watch = args.includes('--watch');
const watcher = {
  onRebuild: (error, result) => {
    if (error) console.error('Rebuild failed: ', error);
    else console.log('Rebuild succeed.');
  }
};

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: true,
  outdir: 'public',
  format: 'esm',
  sourcemap: true,
  splitting: true,
  plugins: [
    sassPlugin()
  ],
  watch: watch && watcher
}).then(() => {
  watch ? console.log('Running in watch mode...') : true
}).catch(() => process.exit(1));