import { HttpClient } from '../Core/HttpClient.js';

export default {

    /**
     * Get Payment Methods
     *
     * @param {Payment} $payment
     * @return {Array}
     */

    GetPaymentMethods: function () {

        return new Promise(function (resolve, reject) {

            HttpClient('GET', "MerchantPaymentMethod/List", null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * BankSlip Sale
     *
     * @param {Payment} $payment
     * @return {Response}
     */

    Payment: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "Payment", payment, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    //======================================================Carnet Methods=================================================//

    /**
     * Carnet Sale
     *
     * @param {Payment} $payment
     * @return {Response}
     */
    Carnet: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "Carnet", payment, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * CarnetLot  Sale
     *
     * @param {Payment} $payment
     * @return {Response}
     */
    CarnetLot: function (payment) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "carnetasync", payment, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

     /**
     * Carnet Get
     *
     * @param {string} $string
     * @return {Response}
     */
    CarnetGet: function (identifier) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `carnet/Get?identifier=${identifier}`, payment, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Carnet Get Lot
     *
     * @param {string} $string
     * @return {Response}
     */
    CarnetGetLot: function (identifier) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `carnetasync/Get?identifier=${identifier}`, payment, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },
             /**
     * Resend Carnet
     *
     * @param {string} $string
     * @return {Response}
     */
    ResendCarnet: function (identifier) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `Carnet/Resend?identifier=${identifier}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Cancel Carnet
     *
     * @param {string} $string
     * @return {Response}
     */
    CancelCarnet: function (identifier) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `Carnet/Delete?identifier=${identifier}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Cancel carnet lot
     *
     * @param {string} $string
     * @return {Response}
     */
    CancelCarnetLot: function (identifier) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `CarnetAsync/Delete?identifier=${identifier}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Refund a payment
     *
     * @param {int} $Id
     * @return {Response}
     */

    Refund: function (Id, type, Amount) {
        return new Promise(function (resolve, reject) {

        var endpointcancel = null;

            switch (type) {
                case 'BANKSLIP':
                        endpointcancel = `BankSlip/WriteOffBankSlip?idTransaction=${Id}`; 
                    break;
                    case 'CREDIT':
                        endpointcancel = `CreditCard/Cancel/${Id}/${Amount}`;  
                    break;
                    case 'DEBIT':
                        endpointcancel = `DebitCard/Cancel/${Id}`;
                    break;
            
                default:
                         return "Payment method type to be cancel/refunded was not entered";
                    break;
            }

        HttpClient('DELETE', endpointcancel, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });

    },


    CancelType : {
        BANKSLIP: 'BANKSLIP',
        CREDIT: 'CREDIT',
        DEBIT: 'DEBIT'
    }
};
