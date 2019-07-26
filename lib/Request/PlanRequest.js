var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Add a Subscription Register
     *
     * @param [Plan] $Id
     * @return Response
     */
    Add: function (plan) {

        client.HttpClient('POST', "v2/Plan/Add", plan, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });
    },

    /**
     * Update a Subscription Register
     *
     * @param [Plan] $plan
     * @return Response
     */
    Update: function (plan) {

        client.HttpClient('PUT', "v2/Plan/Update", plan, false).then(function (result) {


            console.log(result);

        }, function (err) {

            console.log(err);

        });
    },

    /**
     * Get a Plan Register
     *
     * @param [int] $Id
     * @return Response
     */

    Get: function (Id) {

        client.HttpClient('GET', "v2/Plan/Get?Id=".concat(Id), null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

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

        client.HttpClient('GET', "v2/Plan/List?PageNumber=".concat(PageNumber, "&", "RowsPerPage=", Rowspage), null, false).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    }

};