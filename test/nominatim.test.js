var assert = require('assert')
var omnigeo = require('..')({ service: 'nominatim' })
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('nominatim', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(whitehouseAddress, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 39.6566765)
      assert.equal(res.lng, -77.5708067)

      done()
    })
  })
})
