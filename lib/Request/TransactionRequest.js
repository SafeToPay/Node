var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Get transaction register
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        client.HttpClient('GET', "v2/transaction/Get?Id=".concat(Id), null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        })
    }


};