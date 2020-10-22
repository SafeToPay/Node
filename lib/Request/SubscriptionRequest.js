const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Add Subscription
     *
     * @param [Subscription] $Subscription
     * @return Response
     */
    Add: function (Subscription) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "Subscription/Add", Subscription, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

       /**
     * Get Subscription by id
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `Subscription/Get?Id=${Id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Delete Subscription
     *
     * @return Response
     * @param id
     */
    Delete: function (id) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `Subscription/Delete?id=${id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    },

    /**
     * Update Subscription credit card
     *
     * @param id
     * @param [CreditCard] $CreditCard
     * @return Response
     */
    Update: function (id, CreditCard) {

        return new Promise(function (resolve, reject) {
            HttpClient('PUT', `Subscription/UpdateTokenCard?id=${id}`, CreditCard, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    }
}