
var creditCard = new card.CreditCard();

creditCard.Holder = "João da Silva";
creditCard.CardNumber = "4024007153763191";
creditCard.ExpirationDate = "12/2019";
creditCard.SecurityCode = "241";

creditCard = util.RemoveObjectKeys(creditCard);


Create(creditCard);

