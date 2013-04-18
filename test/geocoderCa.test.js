var assert = require('assert')
var geocoder = require('../geocoderCa')

var nyc = 'New York, New York'

describe('google', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(nyc, function(err, res) {
      assert.equal(res.lat, 43.076676)
      assert.equal(res.lon, -76.865364)

      done()
    })
  })
})
