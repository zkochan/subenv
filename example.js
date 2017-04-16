'use strict'
const subenv = require('.')

process.env.capitals_USA = 'Washington'
process.env.capitals_hungary = 'Budapest'

console.log(subenv('capitals'))
