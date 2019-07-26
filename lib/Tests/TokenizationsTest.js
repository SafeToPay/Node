var TokenizationRequest = require('../Request/TokenizationRequest');
var CreditCard = require('../Models/Payment/CreditCard');

var creditCard = new CreditCard();

creditCard.Holder = "João da Silva";
creditCard.CardNumber = "4024007153763191";
creditCard.ExpirationDate = "12/2019";
creditCard.SecurityCode = "241";

TokenizationRequest.Create(creditCard);

