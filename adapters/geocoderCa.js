var url = require('url')

function GeocoderCaAdapter() {}

GeocoderCaAdapter.prototype.buildUrl = function(address) {
  return url.format({
    protocol: 'http:',
    hostname: 'geocoder.ca',
    query: {
      locate: address,
      jsonp: 1,
      geoit: 'xml',
      callback: 'c'
    }
  })
}

GeocoderCaAdapter.prototype.parseResponse = function(response) {
  var response = /^c\((.+)\);$/.exec(response)[1],
      coords = JSON.parse(response)

  return {
    lat: +coords.latt,
    lng: +coords.longt
  }
}

module.exports = GeocoderCaAdapter
