var http = require('http'),
    url = require('url')

module.exports = function(address, callback) {
  var self = this,
    base = "www.datasciencetoolkit.org/maps/api/geocode/json",
    params = {
      address: address,
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
      var result = JSON.parse(data).results[0].geometry.location
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
