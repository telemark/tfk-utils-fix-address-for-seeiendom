'use strict'

var tap = require('tap')
var fixAddress = require('../index')
var addressToFix = 'Dream Street 48 D, 1732 Høtten'
var expectedAddress = 'Dream Street 48D, 1732 Høtten'

tap.equal(
  fixAddress(addressToFix), expectedAddress,
  'It returns expected address'
)

tap.throws(
  function () {
    fixAddress()
  },
  { message: 'Missing required input: address' },
  'Throws if address not supplied'
)
