const request = require('request');

var geocodeAddress = (address) => {
    var url = `https://maps.google.com/maps/api/geocode/json?&key=AIzaSyDmaFGT6MoXX9ZseGFLrFImUVn-yj5LrIs&address=${address}`;

    return new Promise((resolve, rejected) => {
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                rejected('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                rejected('Unable to find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

geocodeAddress('4711001').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage);
});