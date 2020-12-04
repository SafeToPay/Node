const safe2pay = require('../dist/safe2pay');
var TransactionRequest = safe2pay.api.TransactionRequest;


const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('Transaction Test', function() {

    before(function() {
        const environment = safe2pay.environment.setApiKey('x-api-key');
 
      });

    it('GET', async () => {
        var Id = 852920;
        const response = await  TransactionRequest.Get(Id);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });

      it('GETREFERENCE', async () => {
        var reference = "1059856";
        const response = await  TransactionRequest.GetByReference(reference);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });
  });