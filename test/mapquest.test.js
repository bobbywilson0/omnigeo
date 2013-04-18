var assert = require('assert')
var geocoder = require('../mapquest')
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('mapquest', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(whitehouseAddress, function(err, res) {
      assert.equal(res.lat, 39.656676)
      assert.equal(res.lon, -77.570807)

      done()
    })
  })
})
