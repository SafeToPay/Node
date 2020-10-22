const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Add Plan
     *
     * @param [Plan] $Plan
     * @return Response
     */
    Add: function (Plan) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "Plan/Add", Plan, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Get Plan by id
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `Plan/Get?Id=${Id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Delete Plan
     *
     * @return Response
     * @param id
     */
    Delete: function (id) {

        return new Promise(function (resolve, reject) {
            HttpClient('DELETE', `Plan/Delete?id=${id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    },

    /**
     * Update Plan credit card
     *
     * @param [Plan] $Plan
     * @return Response
     */
    Update: function (Plan) {

        return new Promise(function (resolve, reject) {
            HttpClient('PUT', `Plan/Update`, Plan, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });

        });
    }
}