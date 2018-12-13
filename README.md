[![Build Status](https://travis-ci.org/telemark/tfk-utils-fix-address-for-seeiendom.svg?branch=master)](https://travis-ci.org/telemark/tfk-utils-fix-address-for-seeiendom)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-utils-fix-address-for-seeiendom/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-utils-fix-address-for-seeiendom?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-utils-fix-address-for-seeiendom

Formats an address from [dsf](https://github.com/telemark/dsf) so [seeiendom](https://github.com/zrrrzzt/seeiendom) understands it.
dsf will typically return ```Dream Street 48 D, 1732 Høtten``` and seeiendom needs ```Dream Street 48D, 1732 Høtten```
This module removes the whitespace between house number and house letter.

## Installation
From npm
```sh
$ npm install tfk-utils-fix-address-for-seeiendom
```
From GitHub
```sh
$ git clone git@github.com:telemark/tfk-utils-fix-address-for-seeiendom.git
```

cd into directory and install dependencies
```sh
$ npm install
```

## Usage

```JavaScript
const fixAddress = require('tfk-utils-fix-address-for-seeiendom')
const address = 'Dream Street 48 D, 1732 Høtten'

console.log(fixAddress(address))

//=> Dream Street 48D, 1732 Høtten
```

## License

[MIT](LICENSE)
