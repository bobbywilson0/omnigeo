var http = require('http')

function OmniGeo(options) {
  if (!(this instanceof OmniGeo)) {
    return new OmniGeo(options)
  }

  options = options || { service: 'google' }

  var Adapter = OmniGeo.adapters[options.service]
  this.service = new Adapter(options)
}

OmniGeo.adapters = require('./adapters')

OmniGeo.prototype.geocode = function(address, callback) {
  var url = this.service.buildUrl(address),
      self = this

  http.get(url, function(res) {
    var data = ''

    res.setEncoding('utf8')

    res.on('data', function(chunk) {
      data += chunk
    })

    res.on('end', function() {
      callback(null, self.service.parseResponse(data))
    })

  }).on('error', callback)
}

module.exports = OmniGeo
