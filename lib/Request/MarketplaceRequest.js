const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Merchant List
     *
     * @param [PageNumber] $PageNumber
     * @param [RowsPage] $RowsPage
     * @return Response
     */
    List: function (PageNumber, RowsPage) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `Marketplace/List?PageNumber=${PageNumber}&RowsPerPage=${RowsPage}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    },

    /**
     * Get Merchant
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `Marketplace/Get?id=${Id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Delete Merchant
     *
     * @param [int] $Id
     * @return Response
     */
    Delete: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `Marketplace/Delete?id=${Id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    },

    /**
     * Add Merchant
     *
     * @param [Merchant] $merchant
     * @return Response
     */
    Add: function (merchant) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "Marketplace/Add", merchant, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Update Merchant
     *
     * @param [Merchant] $merchant
     * @param [int] $Id
     * @return Response
     */
    Update: function (merchant, Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('PUT', `Marketplace/Update?id=${Id}`, merchant, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    }
}
