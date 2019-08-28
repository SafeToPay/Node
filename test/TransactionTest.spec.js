const safe2pay = require('../dist/safe2pay');
var TransactionRequest = safe2pay.api.TransactionRequest;


const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('Transaction Test', function() {

    before(function() {
        const enviroment = safe2pay.enviroment.setApiKey('X-API-KEY');
 
      });

    it('GET', async () => {
        var Id = 852920;
        const response = await  TransactionRequest.Get(Id);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });
  });