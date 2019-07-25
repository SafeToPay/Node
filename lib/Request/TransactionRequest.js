var client = require('../Core/HttpClient');
var safe2payResponse = require('../Models/Response/Response');

/**
 * Get transaction register
 *
 * @param [int] $Id
 * @return Response
 */
function Get(Id) {

    client.HttpClient('GET', "v2/transaction/Get?Id=".concat(Id), null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}