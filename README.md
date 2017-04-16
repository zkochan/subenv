# subenv

> Returns all the environment variables that are prefixed with the specified value

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/subenv.svg)](https://www.npmjs.com/package/subenv) [![Build Status](https://img.shields.io/travis/zkochan/subenv/master.svg)](https://travis-ci.org/zkochan/subenv)
<!--/@-->

## Installation

```sh
npm i -S subenv
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const subenv = require('subenv')

process.env.capitals_USA = 'Washington'
process.env.capitals_hungary = 'Budapest'

console.log(subenv('capitals'))
//> { usa: 'Washington', hungary: 'Budapest' }
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io)
