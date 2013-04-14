var http = require('http');
var https = require('https');
var querystring = require('querystring');

var services =  require('./services.json');

exports = module.exports = function(opts) {
  if (!opts) opts = {};
  if (opts.protocol === undefined) opts.protocol = 'http';
  if (opts.service === undefined) opts.service = 'google';
  if (opts.api_key === undefined) opts.api_key = '';

  return new Geocoder(opts);
};

function Geocoder(opts) {
  this.protocol = opts.protocol;
  this.service = opts.service;
  this.api_key = opts.api_key;
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
    address];

  if (s.params) {
    url.push("&");
    url.push(querystring.stringify(s.params));
  }

  if (s.keyRequired === true) {
    url.push("&key=");
    url.push(this.api_key);
  }
  return url.join('');
};

Geocoder.prototype._traverse = function(data, callback) {
  var s = services[this.service];
  var response = JSON.parse(data);

  callback({
    lat: eval(s.lat),
    lon: eval(s.lon),
    service: this.service
  });
};
