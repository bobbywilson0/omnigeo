var http = require('http'),
    url = require('url')

module.exports = function(address, callback) {
  var base = "geocoder.ca",
      params = {
        locate: address,
        jsonp: '1',
        geoit: 'xml',
        callback: 'c'
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
      var result = eval(data)
      callback(err, {
        lat: parseFloat(result.latt),
        lon: parseFloat(result.longt)
      })
    })

    res.on('error', function(err) {
      console.log(err)
    })
  })
}

function c(coords) {
  return coords
}
