var client = require('../Core/HttpClient');

module.exports = {

    /**
     * Tokenization Credit Card
     *
     * @param [CreditCard] $data
     * @return Response
     */
    Create: function (card) {

        client.HttpClient('POST', "v2/token", card, true).then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
    }

}