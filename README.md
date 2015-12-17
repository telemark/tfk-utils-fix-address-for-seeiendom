[![Build Status](https://travis-ci.org/telemark/tfk-utils-fix-address-for-seeiendom.svg?branch=master)](https://travis-ci.org/telemark/tfk-utils-fix-address-for-seeiendom)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-utils-fix-address-for-seeiendom/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-utils-fix-address-for-seeiendom?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-utils-fix-address-for-seeiendom
Formats an address so seeiendom understands it

## Installation
From npm
```sh
$ npm install tfk-utils-fix-address-for-seeiendom
```

From GitHub
```sh
$ git clone git@github.com:telemark/tfk-utils-fix-address-for-seeiendom.git
```

cd into directory and run setup
```sh
$ npm run setup
```

## Usage

```javascript
'use strict'

var fixAddress = require('tfk-utils-fix-address-for-seeiendom')
var address = 'Dream Street 48 D, 1732 Høtten'

console.log(fixAddress(address))

//=> Dream Street 48D, 1732 Høtten
```

## License
[MIT](LICENSE)