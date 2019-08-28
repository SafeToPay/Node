const safe2pay = require('../dist/safe2pay');

const AccountDepositRequest = safe2pay.api.AccountDepositRequest;

const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('AccountDepositTest Test', function() {

    before(function() {
        const enviroment = safe2pay.enviroment.setApiKey('5A3A044DE838403F9566BDFBEE9DE763');
 
      });

    it('DETAIL', async () => {
        const Id = 287891;
        const response = await   AccountDepositRequest.Detail(Id);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });

      it('LIST', async () => {
        var CreatedDateInitial = "2019-07-01";
        var CreatedDateEnd = "2019-07-16";
        var PageNumber = 1;
        var RowsPerPage = 10;

        const response = await    AccountDepositRequest.List(CreatedDateInitial, CreatedDateEnd, PageNumber, RowsPerPage);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });

      it('GET', async () => {
        const response = await    AccountDepositRequest.GetBankAccount();
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
      });
  });