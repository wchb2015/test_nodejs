const yargs = require('yargs');
const dateFormat = require('dateformat');

const weather = require('./weather.js');
const geocde = require('./geocode.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for ',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocde.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2))
            }
        });
    }
});




