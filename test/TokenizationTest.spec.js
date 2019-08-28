const safe2pay = require('../dist/safe2pay');
var CreditCard = safe2pay.model.payment.CreditCard;
const TokenizationRequest = safe2pay.api.TokenizationRequest;


const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('Tokenization Test', function() {

    before(function() {
        const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
 
      });

    it('CREATE', async () => {

        var creditCard = new CreditCard();
        creditCard.Holder = "João da Silva";
        creditCard.CardNumber = "4024007153763191";
        creditCard.ExpirationDate = "12/2019";
        creditCard.SecurityCode = "241";

        const response = await  TokenizationRequest.Create(creditCard);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
      });
  });
