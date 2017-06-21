'use strict'

module.exports = address => {
  if (!address) {
    throw new Error('Missing required input: address')
  }

  const matched = address.match(/\d\s\w[,\s]/g) || ['']
  const fixed = matched[0].replace(' ', '')

  return address.replace(matched, fixed)
}
