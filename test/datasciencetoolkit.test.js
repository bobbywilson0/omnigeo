var assert = require('assert')
var geocoder = require('../')
console.log()
var nyc = 'New York, New York'

describe('dataScienceToolkit', function() {
  it('produces the correct Data Science Toolkit api url', function() {
    assert.equal(geocoder({service: 'dataScienceToolkit'})._buildUrl(nyc),
      'http://www.datasciencetoolkit.org/maps/api/geocode/json?address=New York, New York')
  })

  it('fetches the latitude and longitude', function(done) {
    geocoder({service: 'dataScienceToolkit'}).geocode(nyc, function(res) {
      assert.equal(res.lat, 40.714269)
      assert.equal(res.lon, -74.005973)
      assert.equal(res.service, 'dataScienceToolkit')

      done()
    })
  })
})
