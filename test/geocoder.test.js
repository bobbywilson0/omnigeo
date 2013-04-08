var assert = require("assert");
var Geocoder = require('../geocoder')

describe('Geocoder', function() {
  var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

  describe('#buildUrl', function() {
    it('produces the correct google api url', function() {
      var geocoder = new Geocoder({service: 'google'});
      assert.equal(geocoder.buildUrl(whitehouseAddress),
        'http://maps.googleapis.com/maps/api/geocode/json?address=1600 Pennsylvania Ave., Washington D.C.&sensor=false');
    });

    it('produces the correct bing api url', function() {
      var geocoder = new Geocoder({service: 'bing'});
      assert.equal(geocoder.buildUrl(whitehouseAddress),
        'http://dev.virtualearth.net/REST/v1/Locations?q=1600 Pennsylvania Ave., Washington D.C.&key=AsrQ14sXblQTxnM2KI_9zUSfnCLKQ3hTJ03hRjTfLiz6n31DHUXmfzWofk8g7Q_x');
    });

    it('produces the correct mapquest api url', function() {
      var geocoder = new Geocoder({service: 'mapquest'});
      assert.equal(geocoder.buildUrl(whitehouseAddress),
        'http://open.mapquestapi.com/geocoding/v1/address?location=1600 Pennsylvania Ave., Washington D.C.');
    });

    it('produces the correct nomanatim api url', function() {
      var geocoder = new Geocoder({service: 'nominatim'});
      assert.equal(geocoder.buildUrl(whitehouseAddress),
        'http://nominatim.openstreetmap.org/search?q=1600 Pennsylvania Ave., Washington D.C.&format=json');
    });

    it('produces the correct yandex api url', function() {
      var geocoder = new Geocoder({service: 'yandex'});
      assert.equal(geocoder.buildUrl(whitehouseAddress),
        'http://geocode-maps.yandex.ru/1.x/?geocode=1600 Pennsylvania Ave., Washington D.C.&format=json&plng=uk&key=AFdQR1EBAAAA5AoFeQIAGTneaFLnSLjqGJPDZ0XAAej7xREAAAAAAAAAAAAC0f7HSqDK8SQpwWW7atok7ZGhtg==');
    });
  });

  describe('#protocol', function() {
    it('defaults to http', function() {
      var geocoder = new Geocoder();
      assert.equal(geocoder.protocol, 'http');
    });

    it('can override default', function() {
      var geocoder = new Geocoder({protocol: 'https'});
      assert.equal(geocoder.protocol, 'https');
    });
  });

  describe('#traverse', function() {
    it('evaluates the traversal code on json', function(done) {
      var geocoder = new Geocoder();
      geocoder.perform(geocoder.buildUrl(whitehouseAddress), function(res) {
        assert.equal(geocoder.traverse(res).lat, 38.897096);
        assert.equal(geocoder.traverse(res).lon, -77.03654499999999);
        assert.equal(geocoder.traverse(res).service, 'google');

        done();
      });
    });
  });
});
