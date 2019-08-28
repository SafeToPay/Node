const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Detail a deposit
     *
     * @param [int] $Id
     * @return Response
     */
    GetBankAccount: function () {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "v2/MerchantBankData/Get", null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * List deposit Register
     *
     * @param [date] $CreatedDateInitial
     * @param [date] $CreatedDateEnd
     * @param [int] $PageNumber
     * @param [int] $RowsPerPage
     * @return Response
     */
    List: function (CreatedDateInitial, CreatedDateEnd, PageNumber, RowsPerPage) {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "v2/Transfer/List?".concat("CreatedDateInitial=", CreatedDateInitial, "&CreatedDateEnd=", CreatedDateEnd, "&PageNumber=", PageNumber, "&RowsPerPage=", RowsPerPage), null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Detail a deposit
     *
     * @param [int] $Id
     * @return Response
     */
    Detail: function (Id) {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "v2/Transfer/Get?Id=".concat(Id), null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}