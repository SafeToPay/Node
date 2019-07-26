var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Get Payment Methods
     *
     * @param [Payment] $payment
     * @return Array
     */

    GetPaymentMethods: function () {

        client.HttpClient('POST', "v2/MerchantPaymentMethod/List", null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * BankSlip Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    BankSlip: function (payment) {

        client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    },

    /**
     * CreditCard Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    CreditCard: function (payment) {

        client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * CryptoCurrency Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    CryptoCurrency: function (payment) {

        client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });


    },

    /**
     * Debit Card Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    DebitCard: function (payment) {

        client.HttpClient('POST', "v2/Payment", payment, true).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });


    },

    /**
     * Carnet Sale
     *
     * @param [Payment] $payment
     * @return Response
     */
    Carnet: function (payment) {

        client.HttpClient('POST', "v2/Carnet", payment, true).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * CarnetLot  Sale
     *
     * @param [Payment] $payment
     * @return Response
     */
    CarnetLot: function (payment) {

        client.HttpClient('POST', "v2/carnetasync/", payment, true).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * DebitAccount Sale
     *
     * @param [Payment] $payment
     * @return Response
     */
    DebitAccount: function (payment) {

        client.HttpClient('POST', "v2/payment", payment, true).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * Refund a payment
     *
     * @param [int] $Id
     * @return Response
     */

    Refund: function (Id) {

        client.HttpClient('DELETE', "v2/CreditCard/Cancel/".concat(Id), null, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });

    }

}