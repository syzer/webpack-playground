// import { getOptions } from 'loader-utils'
// import validateOptions from 'schema-utils'

const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}

console.error('sadasdsa')
// throw 'SDadas'

module.exports = function(source) {
  const options = getOptions(this)

  validateOptions(schema, options, 'Example Loader')

  // Apply some transformations to the source...
  // throw source
  return `console.log('running'); \n ${ JSON.stringify(source) }`
  // return `export default ${ JSON.stringify(source) }`
}