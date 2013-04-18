var http = require('http'),
    url = require('url')

module.exports = function(address, callback) {
  var self = this,
    base = "geocode-maps.yandex.ru/1.x/",
    params = {
      geocode: address,
      format: "json",
      plng: "uk"
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
      var result = JSON.parse(data).response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
      callback(err, {
        lat: parseFloat(result[1]),
        lon: parseFloat(result[0])
      })
    })

    res.on('error', function(err) {
      console.log(err)
    })
  })
}
