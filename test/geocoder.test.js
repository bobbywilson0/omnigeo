var assert = require("assert");
var Geocoder = require('../geocoder')

describe('Geocoder', function() {
  var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

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


});
