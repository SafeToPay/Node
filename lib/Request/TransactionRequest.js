const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Get transaction register
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `transaction/Get?Id=${Id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

       /**
     * Get transaction register by reference
     *
     * @param [string] $Id
     * @return Response
     */
    GetByReference: function (reference) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `transaction/Reference?reference=${reference}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}