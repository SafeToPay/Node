var client = require('../Core/HttpClient');
var util = require('../Core/Util');

var CreditObj = require('../Models/Payment/CreditCard');
var DebitObj = require('../Models/Payment/DebitCard');
var BankslipObj = require('../Models/Payment/Bankslip');
var bankDataObj = require('../Models/Bank/BankData');
var carnetObj = require('../Models/Payment/Carnet');
var carnetLotObj = require('../Models/Payment/CarnetLot');
var TransactionObj = require('../Models/Transaction/Transaction');
var CustomerObj = require('../Models/General/Customer');
var ProductObj = require('../Models/General/Product');
var AddressObj = require('../Models/General/Address');


/**
 * Get Payment Methods
 *
 * @param [Payment] $payment
 * @return Array
 */
function GetPaymentMethods() {

    client.HttpClient('POST', "v2/MerchantPaymentMethod/List", null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * BankSlip Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function BankSlip(payment) {

    client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}

/**
 * CreditCard Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function CreditCard(payment) {

    client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * CryptoCurrency Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function CryptoCurrency(payment) {

    client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * Debit Card Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function DebitCard(payment) {

    client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * Carnet Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function Carnet(payment) {

    client.HttpClient('POST', "v2/Carnet", payment, true).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * CarnetLot  Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function CarnetLot(payment) {

    client.HttpClient('POST', "v2/carnetasync/", payment, true).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * DebitAccount Sale
 *
 * @param [Payment] $payment
 * @return Response
 */
function DebitAccount(payment) {

    client.HttpClient('POST', "v2/payment", payment, true).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * Refund a payment
 *
 * @param [int] $Id
 * @return Response
 */
function Refund(Id) {

    client.HttpClient('DELETE', "v2/CreditCard/Cancel/".concat(Id), null, false).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}
