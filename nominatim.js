var http = require('http'),
    url = require('url')

module.exports = function(address, callback) {
  var self = this,
    base = "nominatim.openstreetmap.org/search",
    params = {
      q: address,
      format: 'json'
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
      var result = JSON.parse(data)[0]
      callback(err, {
        lat: result.lat,
        lon: result.lon
      })
    })

    res.on('error', function(err) {
      console.log(err)
    })
  })
}
