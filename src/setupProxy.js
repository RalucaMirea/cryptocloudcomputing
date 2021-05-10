const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('https://finnhub.io/api', 
        { target: 'https://stockmarketcloudcomputing.s3-website.eu-central-1.amazonaws.com/' } 
    ));
    app.use(proxy('https://api.nomics.com/v1', 
        { target: 'https://stockmarketcloudcomputing.s3-website.eu-central-1.amazonaws.com//' }  
    ));
}