var assert = require('assert')
var geocoder = require('../yandex')
var nyc = 'New York, New York'

describe('yandex', function() {
  it('fetches the latitude and longitude', function(done) {
    geocoder(nyc, function(err, res) {
      assert.equal(res.lat, 40.714551)
      assert.equal(res.lon, -74.007121)

      done()
    })
  })
})
