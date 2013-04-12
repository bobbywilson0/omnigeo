// BRING YOUR OWN API KEY TO TEST THIS

// var assert = require("assert");
// var geocoder = require('../');
// var whitehouseAddress = '1600 Pennsylvania Ave., Washington D.C.';

// describe('bing', function() {
//   it('produces the correct bing api url', function() {
//     assert.equal(geocoder({service: 'bing', api_key: API_KEY_HERE })._buildUrl(whitehouseAddress),
//       'http://dev.virtualearth.net/REST/v1/Locations?q=1600 Pennsylvania Ave., Washington D.C.&key=AsrQ14sXblQTxnM2KI_9zUSfnCLKQ3hTJ03hRjTfLiz6n31DHUXmfzWofk8g7Q_x');
//   });

//   it('fetches the latitude and longitude', function(done) {
//     geocoder({service: 'bing', api_key: API_KEY_HERE }).geocode(whitehouseAddress, function(res) {
//       assert.equal(res.lat, 38.8986799120903);
//       assert.equal(res.lon, -77.03597456216812);
//       assert.equal(res.service, 'bing');

//       done();
//     });
//   });
// });
