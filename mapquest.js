var http = require('http'),
    url = require('url')

module.exports = function(address, callback) {
  var self = this,
    base = "open.mapquestapi.com/geocoding/v1/address",
    params = {
      location: address
    },
    uri = url.format({
      protocol: 'http',
      hostname: base,
      query: params
    })

  http.get(uri, function(res) {
    var data = ''

    res.on('data', function (chunk) {
      data += chunk
    })

    res.on('end', function(err) {
      var result = JSON.parse(data).results[0].locations[0].latLng
      callback(err, {
        lat: result.lat,
        lon: result.lng
      })
    })

    res.on('error', function(err) {
      console.log(err)
    })
  })
}
