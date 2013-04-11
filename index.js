var http = require('http');
var https = require('https');
var querystring = require('querystring');

var services =  require('./services.json');
var keys =  require('./keys.json');

exports = module.exports = function(opts) {
  if (!opts) opts = {};
  if (opts.protocol === undefined) opts.protocol = 'http';
  if (opts.service === undefined) opts.service = 'google';

  return new Geocoder(opts);
}

function Geocoder(opts) {
  this.protocol = opts.protocol;
  this.service = opts.service;
}

Geocoder.prototype.geocode = function(address, callback) {
  var self = this;
  var protocol = self.protocol === 'https' ? https : http;
  var url = self._buildUrl(address);

  protocol.get(url, function(res) {

    var data = "";

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function(err) {
      self._traverse(data, callback);
    });

    res.on('error', function(err) {
      console.log(err);
    });
  });

};

Geocoder.prototype._buildUrl = function(address) {
  var s = services[this.service];
  var url = [this.protocol, "://", s.base, "?", s.addressParam, "=",
    address]

  if (s.params) {
    url.push("&");
    url.push(querystring.stringify(s.params));
  }

  if (s.keyRequired === true) {
    url.push("&key=");
    url.push(keys[this.service]);
  }

  return url.join('');
}

Geocoder.prototype._traverse = function(data, callback) {
  s = services[this.service];
  d = JSON.parse(data);

  callback({
    lat: eval('d' + s.lat),
    lon: eval('d' + s.lon),
    service: this.service
  })
}
