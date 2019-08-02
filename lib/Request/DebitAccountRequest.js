const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Get a  debit account Register
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "v2/DebitAccount/Get?id=".concat(Id), null, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * Cancel a Debit Account Register
     *
     * @param [string] $HashSale
     * @return Response
     */
    Cancel: function (Id) {

        return new Promise(function (resolve,reject) {
            HttpClient('DELETE', "v2/DebitAccount/Cancel?id=".concat(Id), null, false).then(function (result) {
                if (result.HasError == false)
                resolve(result);
            else
                reject(result);
            });
        });
    }
}