// wmr.config.mjs
import strip from '@rollup/plugin-strip';

/** @param {import('wmr').Options} config */
export default async function (config) {
  config.plugins.push(
    // add any Rollup plugins:
    strip()
  )
}