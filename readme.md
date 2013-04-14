omnigeo
=======

omnigeo is a node.js library for geocoding addresses with pluggable services.
There are no production dependencies outside of node.js itself. The current
state of this library is very alpha. You have been warned.

## Usage

Defaults to google:
```javascript
geocoder().geocode('New York, NY', function(res) {
  console.log(res)
  // { lat: 40.71, lon: -74.00, service: 'google' }
}
```

Defining a service:
```javascript
geocoder({service: 'mapquest'}).geocode('New York, NY', function(res) {
  console.log(res)
  // { lat: 40.71, lon: -74.00, service: 'mapquest' }
}
```

## Services

- Google Maps
- Mapquest Open
- Nominatim (OpenStreetMaps geoder)
- Yandex
- DataScienceToolkit

### Why these services?

The short answer is that they all work without an api key. This is great for
several reasons but ultimately allows a very simple interface to these
services.

## Contributing

If you have an interest in working on something or fixing a bug, file an issue.

### Add a service

The following is the format for a service. The key you define will be how the
service is referenced everywhere. Look at the `services.json` file for
examples.

The required keys you need to provide:

- **base**: the portion of the url after the protocol and before any parameters
- **lat/lon**: using `response` as the json response from the service you must
specify the path to get to the lat/lon values.
- **addressParam**: what the service uses for the query parameter for the address in
question.

Optional:
- **params**: if the service requires any other parameters to be included
to perform a proper request for their service.

```JSON
"nominatim": {
  "base": "nominatim.openstreetmap.org/search",
  "lat": "response[0].lat",
  "lon": "response[0].lon",
  "addressParam": "q",
  "params": {
    "format": "json"
  }
}
```

I have also added an integration test for each of the services just to make
sure that they are all still working before I push code. Upon adding a service
please include on in a pull request (I will be glad to help with doing this).

## License

BSD
