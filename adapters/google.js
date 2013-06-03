var url = require('url')

function GoogleAdapter() {}

GoogleAdapter.prototype.buildUrl = function(address) {
  return url.format({
    protocol: 'http:',
    hostname: 'maps.googleapis.com',
    pathname: '/maps/api/geocode/json',
    query: {
      address: address,
      sensor: false
    }
  })
}

GoogleAdapter.prototype.parseResponse = function(response) {
  var coords = JSON.parse(response).results[0].geometry.location
  return coords
}

module.exports = GoogleAdapter

