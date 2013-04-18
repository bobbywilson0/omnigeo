var assert = require('assert')
var geocoder = require('../google')

var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('google', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(whitehouseAddress, function(err, res) {
      assert.equal(res.lat, 38.897096)
      assert.equal(res.lon, -77.03654499999999)

      done()
    })
  })
})
