import * as safe2pay from '../dist/safe2pay.js';

import { AccountDepositRequest } from '../dist/safe2pay.js';

import chai from 'chai';
import subSet from 'chai-subset';
chai.use(subSet);



describe('AccountDepositTest Test', function() {

    before(function() {
        const environment = safe2pay.environment.setApiKey('x-api-key');
 
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