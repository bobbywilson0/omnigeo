var assert = require("assert");
var Geocoder = require('../geocoder');
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

describe('google', function() {
  it('produces the correct google api url', function() {
    var geocoder = new Geocoder({service: 'google'});
    assert.equal(geocoder.buildUrl(whitehouseAddress),
      'http://maps.googleapis.com/maps/api/geocode/json?address=1600 Pennsylvania Ave., Washington D.C.&sensor=false');
  });

  it('fetches the latitude and longitude', function(done) {
    var geocoder = new Geocoder({service: 'bing'});
    geocoder.perform(geocoder.buildUrl(whitehouseAddress), function(res) {
      var output = geocoder.traverse(res);

      assert.equal(output.lat, 38.8986799120903);
      assert.equal(output.lon, -77.03597456216812);
      assert.equal(output.service, 'bing');

      done();
    });
  });
});
