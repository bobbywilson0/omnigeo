var assert = require("assert");
var Geocoder = require('../geocoder');
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

describe('nominatim', function() {
  it('produces the correct nominatim api url', function() {
    var geocoder = new Geocoder({service: 'nominatim'});
    assert.equal(geocoder.buildUrl(whitehouseAddress),
      'http://nominatim.openstreetmap.org/search?q=1600 Pennsylvania Ave., Washington D.C.&format=json');
  });

  it('fetches the latitude and longitude', function(done) {
    var geocoder = new Geocoder({service: 'nominatim'});
    geocoder.perform(geocoder.buildUrl(whitehouseAddress), function(res) {
      var output = geocoder.traverse(res);

      assert.equal(output.lat, 39.6566765);
      assert.equal(output.lon, -77.5708067);
      assert.equal(output.service, 'nominatim');

      done();
    });
  });
});
