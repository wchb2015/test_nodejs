const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var getcodeUrl = `https://maps.google.com/maps/api/geocode/json?&key=AIzaSyDmaFGT6MoXX9ZseGFLrFImUVn-yj5LrIs&address=${encodedAddress}`;


axios.get(getcodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address!');
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/c63fe9c188ecbbaf5acbdf3effbc0eba/${lat},${lng}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    })

    .then((response) => {
        console.log(JSON.stringify({
            temperature: response.data.currently.temperature,
            apparentTemperature: response.data.currently.apparentTemperature,
            summary: response.data.currently.summary
        }, undefined, 2));
    })

    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to APID servers');
        } else {
            console.log(e.message);
        }
    });