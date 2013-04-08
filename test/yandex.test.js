var assert = require("assert");
var Geocoder = require('../geocoder');
var nyc = 'New York, New York';

describe('yandex', function() {
  it('produces the correct yandex api url', function() {
    var geocoder = new Geocoder({service: 'yandex'});
    assert.equal(geocoder.buildUrl(nyc),
      'http://geocode-maps.yandex.ru/1.x/?geocode=New York, New York&format=json&plng=uk&key=AFdQR1EBAAAA5AoFeQIAGTneaFLnSLjqGJPDZ0XAAej7xREAAAAAAAAAAAAC0f7HSqDK8SQpwWW7atok7ZGhtg==');
  });

  it('fetches the latitude and longitude', function(done) {
    var geocoder = new Geocoder({service: 'yandex'});
    geocoder.perform(geocoder.buildUrl(nyc), function(res) {
      var output = geocoder.traverse(res);

      assert.equal(output.lat, 40.714551);
      assert.equal(output.lon, -74.007121);
      assert.equal(output.service, 'yandex');

      done();
    });
  });
});
