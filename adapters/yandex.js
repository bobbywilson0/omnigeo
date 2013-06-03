var url = require('url')

function YandexAdapter() {}

YandexAdapter.prototype.buildUrl = function(address) {
  return url.format({
    protocol: 'http:',
    hostname: 'geocode-maps.yandex.ru',
    pathname: '/1.x/',
    query: {
      geocode: address,
      format: 'json',
      plng: 'uk'
    }
  })
}

YandexAdapter.prototype.parseResponse = function(response) {
  var coords = JSON.parse(response)
    .response
    .GeoObjectCollection
    .featureMember[0]
    .GeoObject
    .Point
    .pos
    .split(' ')

  return {
    lat: +coords[1],
    lng: +coords[0]
  }
}

module.exports = YandexAdapter
