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
            HttpClient('GET', "v2/transaction/Get?Id=".concat(Id), null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}