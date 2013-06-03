var url = require('url')

function BingAdapter(options) {
  this.apiKey = options.apiKey
}

BingAdapter.prototype.buildUrl = function(address) {
  return url.format({
    protocol: 'http:',
    hostname: 'dev.virtualearth.net',
    pathname: '/REST/v1/Locations',
    query: {
      q: address,
      key: this.apiKey
    }
  })
}

BingAdapter.prototype.parseResponse = function(response) {
  var coords = JSON.parse(response)
    .resourceSets[0]
    .resources[0]
    .geocodePoints[0]
    .coordinates

  return {
    lat: coords[0],
    lng: coords[1]
  }
}

module.exports = BingAdapter
