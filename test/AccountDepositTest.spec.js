const safe2pay = require('../dist/safe2pay');

const AccountDepositRequest = safe2pay.api.AccountDepositRequest;

const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('AccountDepositTest Test', function() {

    before(function() {
        const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
 
      });

    it('DetailList', async () => {
      var day = 17;
      var month = 9;
      var year = 2019;
      var Page = 1;
      var Rows = 10;


        const response = await   AccountDepositRequest.DetailList(day,month,year,Page,Rows);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });

      it('LIST', async () => {

        var month = 5;
        var year = 2019;

        const response = await    AccountDepositRequest.List(month,year);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });

      it('GetBankAccount', async () => {
        const response = await    AccountDepositRequest.GetBankAccount();
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });
  });