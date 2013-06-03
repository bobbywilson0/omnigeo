var assert = require('assert')
var omnigeo = require('..')({ service: 'yandex' })
var nyc = 'New York, New York'

describe('yandex', function() {
  it('fetches the latitude and longitude', function(done) {
    omnigeo.geocode(nyc, function(err, res) {
      assert.ifError(err)
      assert.equal(res.lat, 40.714551)
      assert.equal(res.lng, -74.007121)

      done()
    })
  })
})
