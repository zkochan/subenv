'use strict'
const test = require('tape')
const subenv = require('.')

process.env.foo_key1 = 1
process.env.fOo_key2 = 2
process.env.fOo_kEy3 = 3

test('gets all keys', t => {
  const foo = subenv('foo')

  t.deepEqual(foo, {
    key1: '1',
    key2: '2',
    key3: '3'
  })

  t.end()
})

test('gets all keys when uppercase prefix specified', t => {
  const foo = subenv('FOO')

  t.deepEqual(foo, {
    key1: '1',
    key2: '2',
    key3: '3'
  })

  t.end()
})

test('gets all keys when redundant underscore passed in', t => {
  const foo = subenv('foo_')

  t.deepEqual(foo, {
    key1: '1',
    key2: '2',
    key3: '3'
  })

  t.end()
})

test('throws error when nothing passed in', t => {
  t.throws(() => subenv())
  t.end()
})
