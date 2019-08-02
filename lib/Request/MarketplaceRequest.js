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
            HttpClient('GET', "v2/Marketplace/List?PageNumber=" + PageNumber + "&RowsPerPage=" + RowsPage, null, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
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
            HttpClient('GET', "v2/Marketplace/Get?id=" + Id, null, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
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
            HttpClient('DELETE', "v2/Marketplace/Delete?id=" + Id, null, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
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
            HttpClient('POST', "v2/Marketplace/Add", merchant, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
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
    Update: function (merchant) {

        return new Promise(function (resolve, reject) {
            HttpClient('PUT', "/v2/Marketplace/Update?id=" + merchant.Id, merchant, false).then(function (result) {
                if (result.HasError == false)
                    resolve(result);
                else
                    reject(result);
            });

        });
    }
}