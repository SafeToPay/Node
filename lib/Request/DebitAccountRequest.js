var client = require('../Core/HttpClient');
var safe2payResponse = require('../Models/Response/Response');

  /**
     * Get a  debit account Register
     *
     * @param [int] $Id
     * @return Response
     */
function Get(Id) {

    client.HttpClient('GET', "v2/DebitAccount/Get?id=".concat(Id), null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}

 /**
     * Cancel a Debit Account Register
     *
     * @param [string] $HashSale
     * @return Response
     */
function Cancel(Id) {

    client.HttpClient('DELETE', "v2/DebitAccount/Cancel?id=".concat(Id), null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}