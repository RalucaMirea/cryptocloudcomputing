const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('https://finnhub.io/api', 
        { target: 'https://stockmarketcloudcomputing.s3-website.eu-central-1.amazonaws.com/' } // change with https://github.com/RalucaMirea/cryptocloudcomputing.git if it's not working
    ));
    app.use(proxy('https://api.nomics.com/v1', 
        { target: 'https://stockmarketcloudcomputing.s3-website.eu-central-1.amazonaws.com//' }  // change with http://stockmarketcloudcomputing.s3-website.eu-central-1.amazonaws.com if it's not working
    ));
}