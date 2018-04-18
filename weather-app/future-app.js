const request = require('request');

var code = 'P1809';
var url = `http://hq.sinajs.cn/list=${code}`;

var getPriceInfo = (code, callback) => {
    request({
        url: url,
        json: false
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Sina servers.');
        } else {
            callback(undefined, {
                contractName: code,
                openingPrice: body.split(',')[2],
                closingPrice: body.split(',')[8],
                theHighestPrice: body.split(',')[3],
                theLowestPrice: body.split(',')[4],
                averagePrice: body.split(',')[9],
                openInterest: body.split(',')[13],
                volume: body.split(',')[14]
            });
        }
    });
};

getPriceInfo(code, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2))
    }
});