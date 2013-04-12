var assert = require("assert");
var geocoder = require('../');
var nyc = 'New York, New York';

describe('yandex', function() {
  it('produces the correct yandex api url', function() {
    assert.equal(geocoder({service: 'yandex'})._buildUrl(nyc),
      'http://geocode-maps.yandex.ru/1.x/?geocode=New York, New York&format=json&plng=uk');
  });

  it('fetches the latitude and longitude', function(done) {
    geocoder({service: 'yandex'}).geocode(nyc, function(res) {
      assert.equal(res.lat, 40.714551);
      assert.equal(res.lon, -74.007121);
      assert.equal(res.service, 'yandex');

      done();
    });
  });
});
