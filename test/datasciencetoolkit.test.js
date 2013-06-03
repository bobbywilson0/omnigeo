var assert = require('assert')
var omnigeo = require('..')({ service: 'dataScienceToolkit' })
var nyc = 'New York, New York'

describe('dataScienceToolkit', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(nyc, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 40.714269)
      assert.equal(res.lng, -74.005973)

      done()
    })
  })
})
