const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Add a Subscription Register
     *
     * @param [int] $Id
     * @return Response
     */
    Add: function (subscription) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/subscription", subscription, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Get a Subscription Register
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', "v2/subscription/get?id=".concat(Id), null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}