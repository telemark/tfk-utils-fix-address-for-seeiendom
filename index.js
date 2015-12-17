'use strict'

function fixAddress (address) {
  var matched = address.match(/\d\s\w,/g) || ['']
  var fixed = matched[0].replace(' ', '')
  return address.replace(matched, fixed)
}

module.exports = fixAddress
