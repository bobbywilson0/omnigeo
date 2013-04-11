var assert = require("assert");
var geocoder = require('../');
var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

describe('nominatim', function() {
  it('produces the correct nominatim api url', function() {
    assert.equal(geocoder({service: 'nominatim'})._buildUrl(whitehouseAddress),
      'http://nominatim.openstreetmap.org/search?q=1600 Pennsylvania Ave., Washington D.C.&format=json');
  });

  it('fetches the latitude and longitude', function(done) {
    geocoder({service: 'nominatim'}).geocode(whitehouseAddress, function(res) {

      assert.equal(res.lat, 39.6566765);
      assert.equal(res.lon, -77.5708067);
      assert.equal(res.service, 'nominatim');

      done();
    });
  });
});
