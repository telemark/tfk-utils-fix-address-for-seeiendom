'use strict'

function fixAddress (address) {
  var matched = address.match(/\d\s\w,/g)[0]
  var fixed = matched.replace(' ', '')
  return address.replace(matched, fixed)
}

module.exports = fixAddress
