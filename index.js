'use strict'

function fixAddress (address) {
  if (!address) {
    throw new Error('Missing required input: address')
  }

  var matched = address.match(/\d\s\w,/g) || ['']
  var fixed = matched[0].replace(' ', '')
  return address.replace(matched, fixed)
}

module.exports = fixAddress
