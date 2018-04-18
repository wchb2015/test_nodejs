const request = require('request');
const geocde = require('./geocode.js');

// geocde.geocodeAddress(address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });


var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/c63fe9c188ecbbaf5acbdf3effbc0eba/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                summary: body.currently.summary
            });
        } else {
            callback('Unable to fetch weather!');
        }
    });
};




module.exports.getWeather = getWeather;