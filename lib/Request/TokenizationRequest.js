import { HttpClient } from '../Core/HttpClient.js';

export default {

    /**
     * Tokenization Credit Card
     *
     * @param {CreditCard} $data
     * @return {Response}
     */
    Create: function (card) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "token", card, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    Delete: function (cardToken) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `token/Delete?cardToken=${cardToken}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    List: function (PageNumber, RowsPerPage) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `token/List?PageNumber=${PageNumber}&RowsPerPage=${RowsPerPage}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
};
