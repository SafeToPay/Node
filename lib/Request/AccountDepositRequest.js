var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Detail a deposit
     *
     * @param [int] $Id
     * @return Response
     */
    GetBankAccount: function () {

        client.HttpClient('GET', "v2/MerchantBankData/Get", null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

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

        client.HttpClient('GET', "v2/Transfer/List?".concat("CreatedDateInitial=", CreatedDateInitial, "&CreatedDateEnd=", CreatedDateEnd, "&PageNumber=", PageNumber, "&RowsPerPage=", RowsPerPage), null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    },

    /**
     * Detail a deposit
     *
     * @param [int] $Id
     * @return Response
     */
    Detail: function (Id) {

        client.HttpClient('GET', "v2/Transfer/Get?Id=".concat(Id), null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    }

}