var url = require('url')

function NominatimAdapter() {}

NominatimAdapter.prototype.buildUrl = function(address) {
  return url.format({
    protocol: 'http:',
    hostname: 'nominatim.openstreetmap.org',
    pathname: '/search',
    query: {
      q: address,
      format: 'json'
    }
  })
}

NominatimAdapter.prototype.parseResponse = function(response) {
  var coords = JSON.parse(response)[0]

  return {
    lat: coords.lat,
    lng: coords.lon
  }
}

module.exports = NominatimAdapter
