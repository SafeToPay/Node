var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Add a Subscription Register
     *
     * @param [int] $Id
     * @return Response
     */
    Add: function (subscription) {

        client.HttpClient('POST', "v2/subscription", subscription, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });
    },

    /**
     * Get a Subscription Register
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        client.HttpClient('GET', "v2/subscription/get?id=".concat(Id), null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    }


}