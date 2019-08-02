const safe2pay = require('../dist/safe2pay');

const TokenizationRequest = safe2pay.api.TokenizationRequest;
var CreditCard = safe2pay.model.payment.CreditCard;


function Test() {

    var creditCard = new CreditCard();
    creditCard.Holder = "João da Silva";
    creditCard.CardNumber = "4024007153763191";
    creditCard.ExpirationDate = "12/2019";
    creditCard.SecurityCode = "241";


    TokenizationRequest.Create(creditCard)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}


// Test();