var assert = require("assert");
var Geocoder = require('../geocoder');
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

describe('mapquest', function() {
  it('produces the correct mapquest api url', function() {
    var geocoder = new Geocoder({service: 'mapquest'});
    assert.equal(geocoder.buildUrl(whitehouseAddress),
      'http://open.mapquestapi.com/geocoding/v1/address?location=1600 Pennsylvania Ave., Washington D.C.');
  });

  it('fetches the latitude and longitude', function(done) {
    var geocoder = new Geocoder({service: 'mapquest'});
    geocoder.perform(geocoder.buildUrl(whitehouseAddress), function(res) {
      var output = geocoder.traverse(res);

      assert.equal(output.lat, 39.656676);
      assert.equal(output.lon, -77.570807);
      assert.equal(output.service, 'mapquest');

      done();
    });
  });
});
