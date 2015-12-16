'use strict'

function fixAddress (address) {
  var splittedAddressOnComma = address.split(',')
  var splittedAddress = splittedAddressOnComma[0].split(' ')
  var fixedAddress = []
  var prevItem = ''
  var thisItem = ''
  splittedAddress.forEach(function (item) {
    thisItem = item
    if (thisItem.length === 1 && parseInt(prevItem) > 0) {
      fixedAddress.pop(fixedAddress.length - 1)
      fixedAddress.push(prevItem + thisItem)
      prevItem = ''
    } else {
      prevItem = thisItem
    }
    if (prevItem != '') {
      fixedAddress.push(prevItem)
    }
  })
  return fixedAddress.join(' ') + ',' + splittedAddressOnComma[1]
}

module.exports = fixAddress
