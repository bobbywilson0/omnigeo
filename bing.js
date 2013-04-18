var http = require('http'),
    url = require('url')

module.exports = function(address, callback) {
  if (!process.env.BING_API_KEY) {
    throw(Error('You need to specify a BING_API_KEY environment variable.'))
  }
  var self = this,
    base = 'dev.virtualearth.net/REST/v1/Locations',
    params = {
      q: address,
      key: process.env.BING_API_KEY
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
      var result = JSON.parse(data).resourceSets[0].resources[0].geocodePoints[0].coordinates
      callback(err, {
        lat: result[0],
        lon: result[1]
      })
    })

    res.on('error', function(err) {
      console.log(err)
    })
  })
}
