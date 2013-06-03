omnigeo
=======

omnigeo is a node.js library for geocoding addresses with pluggable services.
There are no production dependencies outside of node.js itself. The current
state of this library is very alpha. You have been warned.

## Usage

Defaults to google:
```javascript
var omnigeo = require('omnigeo')

omnigeo().geocode('New York, NY', function(res) {
  console.log(res)
  // { lat: 40.71, lon: -74.00 }
}
```

Defining a service:
```javascript
omnigeo({service: 'mapquest'}).geocode('New York, NY', function(res) {
  console.log(res)
  // { lat: 40.71, lon: -74.00 }
}
```

## Services

- Bing
- DataScienceToolkit
- Geocoder.ca
- Google Maps
- Mapquest Open
- Nominatim (OpenStreetMaps geocoder)
- Yandex

## Adding a service

Additional service adapters can be added to the `services` object on the constructor:
```javascript
var adapter = require('./my_adapter')
omnigeo.services['my api'] = adapter

omnigeo({service: 'my api'}).geocode('New York, NY', function(res) {
  ...
})
```

All adapters must be constructors that implement the `buildUrl` and `parseResponse` methods on their prototype.

## Contributing

If you have an interest in working on something or fixing a bug, file an issue.

## License

BSD
