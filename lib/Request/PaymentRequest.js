const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Get Payment Methods
     *
     * @param [Payment] $payment
     * @return Array
     */

    GetPaymentMethods: function () {

        return new Promise(function (resolve, reject) {

            HttpClient('GET', "v2/MerchantPaymentMethod/List", null, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * BankSlip Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    BankSlip: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/Payment", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * CreditCard Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    CreditCard: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/Payment", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * CryptoCurrency Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    CryptoCurrency: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/Payment", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);;
            });
        });
    },

    /**
     * Debit Card Sale
     *
     * @param [Payment] $payment
     * @return Response
     */

    DebitCard: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/Payment", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * Carnet Sale
     *
     * @param [Payment] $payment
     * @return Response
     */
    Carnet: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/Carnet", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * CarnetLot  Sale
     *
     * @param [Payment] $payment
     * @return Response
     */
    CarnetLot: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/carnetasync/", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * DebitAccount Sale
     *
     * @param [Payment] $payment
     * @return Response
     */
    DebitAccount: function (payment) {


        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/payment", payment, true).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    },

    /**
     * Refund a payment
     *
     * @param [int] $Id
     * @return Response
     */

    Refund: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', "v2/CreditCard/Cancel/".concat(Id), null, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });
        });
    }
}