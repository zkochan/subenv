'use strict'
const assert = require('assert')

module.exports = function (prefix) {
  assert(prefix, 'prefix has to be passed')
  prefix = normalizePrefix(prefix)
  const prefixLength = prefix.length
  const obj = {}
  for (const key in process.env) {
    if (key.toLowerCase().indexOf(prefix) !== 0) continue
    obj[key.substr(prefixLength).toLowerCase()] = process.env[key]
  }
  return obj
}

function normalizePrefix (prefix) {
  prefix = prefix.toLowerCase()
  if (prefix[prefix.length - 1] === '_') return prefix
  return `${prefix}_`
}
