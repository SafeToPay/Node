const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Tokenization Credit Card
     *
     * @param [CreditCard] $data
     * @return Response
     */
    Create: function (card) {

        return new Promise(function (resolve, reject) {
            HttpClient('POST', "v2/token", card, true).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}