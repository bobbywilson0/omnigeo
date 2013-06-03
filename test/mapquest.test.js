var assert = require('assert')
var omnigeo = require('..')({ service: 'mapquest' })
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('mapquest', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(whitehouseAddress, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 39.656676)
      assert.equal(res.lng, -77.570807)

      done()
    })
  })
})
