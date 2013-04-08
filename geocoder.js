var http = require('http');
var https = require('https');
var querystring = require('querystring');

var services =  require('./services.json');
var keys =  require('./keys.json');

exports = module.exports = Geocoder;

function Geocoder(opts) {
  for(var attr in opts) {
    if(opts.hasOwnProperty(attr)) {
     this[attr] = opts[attr];
    }
  }
}

Geocoder.prototype.url = function() {};
Geocoder.prototype.protocol = "http";
Geocoder.prototype.service = "google";

Geocoder.prototype.perform = function(url, callback) {
  var protocol = this.protocol === 'https' ? https : http;

  protocol.get(url, function(res) {

    var data = "";

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function(err) {
      callback(data);
    });

    res.on('error', function(err) {
      console.log(err);
    });
  });

};

Geocoder.prototype.buildUrl = function(address) {
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

Geocoder.prototype.traverse = function(data) {
  s = services[this.service];
  d = JSON.parse(data);

  return {
    lat: eval('d' + s.lat),
    lon: eval('d' + s.lon),
    service: this.service
  }
}

Geocoder.prototype.geocode = function(address, opts, callback) {
  geocoder.perform(geocoder.buildUrl(address), callback);
};

function unifiedOutput(result, service) {
  return {lat: result.lat, lng: result.lng, service: service}
}
