var client = require('../Core/HttpClient');
var safe2payResponse = require('../Models/Response/Response');


/**
 * Tokenization Credit Card
 *
 * @param [CreditCard] $data
 * @return Response
 */
function Create(card) {

    client.HttpClient('POST', "v2/token", card, true).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });
}