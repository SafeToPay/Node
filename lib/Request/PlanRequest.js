var HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Add a Subscription Register
     *
     * @param [Plan] $Id
     * @return Response
     */
    Add: function (plan) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/Plan/Add", plan, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Update a Subscription Register
     *
     * @param [Plan] $plan
     * @return Response
     */
    Update: function (plan) {

        return new Promise(function (resolve, reject) {
            HttpClient('PUT', "v2/Plan/Update", plan, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Get a Plan Register
     *
     * @param [int] $Id
     * @return Response
     */

    Get: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', "v2/Plan/Get?Id=".concat(Id), null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * List Plan Register
     *
     * @param [int] $PageNumber
     * @param [int] $Rowspage
     * @return Response
     */

    List: function (PageNumber, Rowspage) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', "v2/Plan/List?PageNumber=".concat(PageNumber, "&", "RowsPerPage=", Rowspage), null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }

}