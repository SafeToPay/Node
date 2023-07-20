import { HttpClient } from '../Core/HttpClient.js';

export default {

    /**
     * Get 
     *
     * @param {int} $Id
     * @return {Response}
     */
    Get: function (SingleSaleHash) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `SingleSale/Get?singleSaleHash=${SingleSaleHash}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Resend 
     *
     * @param {int} $Id
     * @return {Response}
     */
    Resend: function (SingleSaleHash) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `SingleSale/Resend?singleSaleHash=${SingleSaleHash}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Delete SingleSale
     *
     * @param {int} $Id
     * @return {Response}
     */
    Delete: function (SingleSaleHash) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `SingleSale/Delete?singleSaleHash=${SingleSaleHash}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    },

    /**
     * Add SingleSale
     *
     * @param {SingleSale} $SingleSale
     * @return {Response}
     */
    Add: function (SingleSale) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "SingleSale/Add", SingleSale, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Update SingleSale
     *
     * @param {SingleSale} $SingleSale
     * @param {int} $Id
     * @return {Response}
     */
    Update: function (SingleSale) {

        return new Promise(function (resolve, reject) {
            HttpClient('PUT', `SingleSale/Update?SingleSaleHash=${SingleSale.SingleSaleHash}`, SingleSale, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    }
};
