var request = require("request");
var Enviroment = require('./Enviroment');

const headers = { 'X-API-KEY': Enviroment.Token, 'Content-Type': 'application/json' };

module.exports.HttpClient = function (method, endpoint, body, IsPayment) {

    //Get Endpoint URL
    endpoint = GetWebMethodUri(IsPayment).concat(endpoint);
    //Get Options 
    var options = { method: method, url: endpoint, headers: headers , body: (body != null ? JSON.stringify(body) : null) };


    return new Promise(function (resolve, reject) {

        request(options, function (error, response, body) {

            if (!error) {     
                resolve(JSON.parse(body));
            } else
                reject(error);

        });


    });

}

function GetWebMethodUri(IsPayment) {
    if (!IsPayment)
        return "https://api.safe2pay.com.br/";
    else
        return "https://payment.safe2pay.com.br/";
}
