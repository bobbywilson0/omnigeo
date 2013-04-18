var assert = require('assert')
var geocoder = require('../nominatim')
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('nominatim', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(whitehouseAddress, function(err, res) {
      assert.equal(res.lat, 39.6566765)
      assert.equal(res.lon, -77.5708067)

      done()
    })
  })
})
