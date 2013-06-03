var url = require('url')

function DataScienceToolkitAdapter() {}

DataScienceToolkitAdapter.prototype.buildUrl = function(address) {
  return url.format({
    protocol: 'http:',
    hostname: 'www.datasciencetoolkit.org',
    pathname: '/maps/api/geocode/json',
    query: { address: address }
  })
}

DataScienceToolkitAdapter.prototype.parseResponse = function(response) {
  var coords = JSON.parse(response).results[0].geometry.location
  return coords
}

module.exports = DataScienceToolkitAdapter
