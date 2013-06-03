var assert = require('assert')
var omnigeo = require('..')({ service: 'geocoderCa' })

var nyc = 'New York, New York'

describe('geocoderCa', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(nyc, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 43.076676)
      assert.equal(res.lng, -76.865364)

      done()
    })
  })
})
