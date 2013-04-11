var assert = require("assert");
var geocoder = require('../');
console.log();
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

describe('google', function() {
  it('produces the correct google api url', function() {
    assert.equal(geocoder()._buildUrl(whitehouseAddress),
      'http://maps.googleapis.com/maps/api/geocode/json?address=1600 Pennsylvania Ave., Washington D.C.&sensor=false');
  });

  it('fetches the latitude and longitude', function(done) {
    geocoder().geocode(whitehouseAddress, function(res) {
      assert.equal(res.lat, 38.897096);
      assert.equal(res.lon, -77.03654499999999);
      assert.equal(res.service, 'google');

      done();
    });
  });
});
