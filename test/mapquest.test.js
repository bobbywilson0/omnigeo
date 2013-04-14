var assert = require('assert')
var geocoder = require('../')
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('mapquest', function() {
  it('produces the correct mapquest api url', function() {
    assert.equal(geocoder({service: 'mapquest'})._buildUrl(whitehouseAddress),
      'http://open.mapquestapi.com/geocoding/v1/address?location=1600 Pennsylvania Ave., Washington D.C.')
  })

  it('fetches the latitude and longitude', function(done) {
    geocoder({service: 'mapquest'}).geocode(whitehouseAddress, function(res) {
      assert.equal(res.lat, 39.656676)
      assert.equal(res.lon, -77.570807)
      assert.equal(res.service, 'mapquest')

      done()
    })
  })
})
