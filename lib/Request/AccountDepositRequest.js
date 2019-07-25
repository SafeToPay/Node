var client = require('../Core/HttpClient');
var safe2payResponse = require('../Models/Response/Response');

/**
 * Detail a deposit
 *
 * @param [int] $Id
 * @return Response
 */
function GetBankAccount() {

    client.HttpClient('GET', "v2/MerchantBankData/Get", null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}

/**
 * List deposit Register
 *
 * @param [date] $CreatedDateInitial
 * @param [date] $CreatedDateEnd
 * @param [int] $PageNumber
 * @param [int] $RowsPerPage
 * @return Response
 */
function List(CreatedDateInitial, CreatedDateEnd, PageNumber, RowsPerPage) {

    client.HttpClient('GET', "v2/Transfer/List?".concat("CreatedDateInitial=", CreatedDateInitial, "&CreatedDateEnd=", CreatedDateEnd, "&PageNumber=", PageNumber, "&RowsPerPage=", RowsPerPage), null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}

/**
 * Detail a deposit
 *
 * @param [int] $Id
 * @return Response
 */
function Detail(Id) {

    client.HttpClient('GET', "v2/Transfer/Get?Id=".concat(Id), null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}
