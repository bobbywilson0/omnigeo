var assert = require('assert')
var omnigeo = require('..')({ service: 'bing' })

var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.'

describe('bing', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(whitehouseAddress, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 38.8986799120903)
      assert.equal(res.lng, -77.03597456216812)

      done()
    })
  })
})
