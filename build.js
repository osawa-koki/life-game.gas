const esbuild = require('esbuild')
const { GasPlugin } = require('esbuild-gas-plugin')

esbuild
.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './public/index.ts',
  plugins: [GasPlugin]
})
.catch(() => process.exit(1))
