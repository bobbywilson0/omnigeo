exports = module.exports = function() {
  return {
    google: {
      base: "maps.googleapis.com/maps/api/geocode/json",
      lat: function(response) { return response.results[0].geometry.location.lat },
      lon: function(response) { return response.results[0].geometry.location.lng },
      addressParam: "address",
      params: {
        sensor: false
      }
    },
    mapquest: {
      base: "open.mapquestapi.com/geocoding/v1/address",
      addressParam: "location",
      lat: function(response) { return response.results[0].locations[0].latLng.lat },
      lon: function(response) { return response.results[0].locations[0].latLng.lng }
    },
    nominatim: {
      base: "nominatim.openstreetmap.org/search",
      lat: function(response) { return response[0].lat },
      lon: function(response) { return response[0].lon },
      addressParam: "q",
      params: {
        format: "json"
      }
    },
    yandex: {
      base: "geocode-maps.yandex.ru/1.x/",
      addressParam: "geocode",
      lat: function(response) { return response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1] },
      lon: function(response) { return response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0] },
      params: {
        format: "json",
        plng: "uk"
      }
    },
    geocoderCa: {
      base: "geocoder.ca",
      addressParam: "locate",
      lat: function(response) { return response.parseFloat(latt) },
      lon: function(response) { return response.parseFloat(longt) },
      params: {
        jsonp: "1",
        geoit: "xml"
      }
    },
    dataScienceToolkit: {
      base: "www.datasciencetoolkit.org/maps/api/geocode/json",
      addressParam: "address",
      lat: function(response) { return response.results[0].geometry.location.lat },
      lon: function(response) { return response.results[0].geometry.location.lng }
    }
  }
}
