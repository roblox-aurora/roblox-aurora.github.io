/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict'
const visit = require('unist-util-visit')
const is = require('unist-util-is')
const u = require('unist-builder')
const LZString = require('lz-string')

/**
 * Parse the meta string into object
 *
 * @param {string} metaString
 * @return {[key: string]: string}
 */
function parseMeta(metaString) {
  const meta = {}

  if (!metaString) {
    return [{}, metaString]
  }

  const strs = metaString.split(' ')

  strs.forEach((str) => {
    const equalIndex = str.indexOf('=')

    if (equalIndex > 0) {
      const key = str.slice(0, equalIndex)
      const value = str.slice(equalIndex + 1)

      meta[key] = value
    } else {
      meta[str] = true
    }
  })

  return [meta, strs[0]]
}

function robloxts(options = {}) {
  return async function transformer(tree, file) {
    const codes = []
    visit(tree, (node, index, parent) => {
      if (is(node, 'code')) {
        codes.push([node, index, parent])
      }
    })

    for (const [node, _, parent] of codes) {
      const [meta, origin] = parseMeta(node.meta)

      if (!meta.rbxts) {
        continue
      }

      // node.lang = origin

      parent.children.push(
        u(
          'link',
          {
            url:
              'https://roblox-ts.com/playground/#code/' +
              LZString.compressToEncodedURIComponent(node.value),
          },
          [u('html', { value: 'run' })]
        )
      )
    }
  }
}

module.exports = robloxts
