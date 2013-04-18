var assert = require('assert')
var geocoder = require('../dataScienceToolkit')
var nyc = 'New York, New York'

describe('dataScienceToolkit', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(nyc, function(err, res) {
      assert.equal(res.lat, 40.714269)
      assert.equal(res.lon, -74.005973)

      done()
    })
  })
})
