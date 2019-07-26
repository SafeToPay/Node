var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Merchant List
     *
     * @param [PageNumber] $PageNumber
     * @param [RowsPage] $RowsPage
     * @return Response
     */
    List: function (PageNumber, RowsPage) {

        client.HttpClient('GET', "v2/Marketplace/List?PageNumber=" + PageNumber + "&RowsPerPage=" + RowsPage, null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * Get Merchant
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        client.HttpClient('GET', "v2/Marketplace/Get?id=" + Id, null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    },

    /**
     * Delete Merchant
     *
     * @param [int] $Id
     * @return Response
     */
    Delete: function (Id) {

        client.HttpClient('DELETE', "v2/Marketplace/Delete?id=" + Id, null, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });

    },

    /**
     * Add Merchant
     *
     * @param [Merchant] $merchant
     * @return Response
     */
    Add: function (merchant) {

        client.HttpClient('POST', "v2/Marketplace/Add", merchant, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

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

        client.HttpClient('PUT', "/v2/Marketplace/Update?id=" + Id, merchant, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });

    }

}