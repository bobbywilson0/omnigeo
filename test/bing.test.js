var assert = require('assert')
var geocoder = require('../bing')

var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('bing', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(whitehouseAddress, function(err, res) {
      assert.equal(res.lat, 38.8986799120903)
      assert.equal(res.lon, -77.03597456216812)

      done()
    })
  })
})
