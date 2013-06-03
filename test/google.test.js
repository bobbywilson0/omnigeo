var assert = require('assert')
var omnigeo = require('..')()

var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('google', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(whitehouseAddress, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 38.897096)
      assert.equal(res.lng, -77.03654499999999)

      done()
    })
  })
})
