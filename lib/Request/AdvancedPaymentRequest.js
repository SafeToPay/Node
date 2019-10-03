const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Advanced Payment Request Simulation [SIMULAR ANTECIPAÇÃO]
     *
     * @return Response
     */
    Simulation: function () {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "AdvancePayment/Simulation", null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Advanced Payment Request [ANTECIPAÇÃO DE RECEBÍVEIS]
     *
     * @return Response
     */
    Require: function () {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "AdvancePayment/Require", null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },
}