const safe2pay = require('../dist/safe2pay');

const MarketplaceRequest = safe2pay.api.MarketplaceRequest;
var BankData = safe2pay.model.bank.BankData;
var Bank = safe2pay.model.bank.Bank;
var Address = safe2pay.model.general.Address;
var Merchant = safe2pay.model.merchant.Merchant;
var MerchantSplit = safe2pay.model.merchant.MerchantSplit;
var MerchantSplitTax = safe2pay.model.merchant.MerchantSplitTax;


const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('Marketplace Test', function () {

    before(function () {
        const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

    });

    it('ADD', async () => {

        var merchant = new Merchant();
        //dados da empresa
        merchant.Identity = "53797700000115";
        merchant.Name = "Francisco e Laís Filmagens ME";
        merchant.CommercialName = "Teste";
        merchant.Email = "2e8901a278@hellomail.fun";
        merchant.ResponsibleName = "Responsável";
        merchant.ResponsibleIdentity = "04270435062";
        //responsável técnico
        merchant.TechEmail = "aaee255acb@hellomail.fun";
        merchant.TechName = "Responsável técnico";
        merchant.TechIdentity = "32001774117";
        //dados de endereço
        merchant.Address = new Address();
        merchant.Address.ZipCode = "90670090";
        merchant.Address.Street = "Logradouro";
        merchant.Address.Complement = "Complemento";
        merchant.Address.Number = "123";
        merchant.Address.District = "Higienopolis";
        merchant.Address.StateInitials = "RS";
        merchant.Address.CityName = "Porto Alegre";
        merchant.Address.CountryName = "Brasil";
        //dados bancários
        merchant.BankData = new BankData();
        merchant.BankData.Bank = new Bank("041");
        merchant.BankData.BankAgency = "1676";
        merchant.BankData.BankAgencyDigit = "0";
        merchant.BankData.BankAccount = "41776";
        merchant.BankData.BankAccountDigit = "7";
        merchant.BankData.Operation = "3";


        var splitBoleto = new MerchantSplit();
        splitBoleto.IsSubaccountTaxPayer = false;
        splitBoleto.PaymentMethodCode = "1";
        splitBoleto.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        var splitCredito = new MerchantSplit();
        splitCredito.IsSubaccountTaxPayer = false;
        splitCredito.PaymentMethodCode = "2";
        splitCredito.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        var splitBitcoin = new MerchantSplit();
        splitCredito.IsSubaccountTaxPayer = false;
        splitCredito.PaymentMethodCode = "3";
        splitCredito.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        var splitDebito = new MerchantSplit();
        splitDebito.IsSubaccountTaxPayer = false;
        splitDebito.PaymentMethodCode = "4";
        splitDebito.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        //splits
        merchant.MerchantSplit.push(splitBoleto, splitCredito, splitDebito);


        const response = await MarketplaceRequest.Add(merchant);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });

    it('UPDATE', async () => {

        var merchant = new Merchant();
        //dados da empresa
        merchant.Id = 866;
        merchant.Identity = "53797700000115";
        merchant.Name = "Francisco e Laís Filmagens ME";
        merchant.CommercialName = "Teste";
        merchant.Email = "2e8901a278@hellomail.fun";
        merchant.ResponsibleName = "Responsável";
        merchant.ResponsibleIdentity = "04270435062";
        //responsável técnico
        merchant.TechEmail = "aaee255acb@hellomail.fun";
        merchant.TechName = "Responsável técnico";
        merchant.TechIdentity = "32001774117";
        //dados de endereço
        merchant.Address = new Address();
        merchant.Address.ZipCode = "90670090";
        merchant.Address.Street = "Logradouro";
        merchant.Address.Complement = "Complemento";
        merchant.Address.Number = "123";
        merchant.Address.District = "Higienopolis";
        merchant.Address.StateInitials = "RS";
        merchant.Address.CityName = "Porto Alegre";
        merchant.Address.CountryName = "Brasil";
        //dados bancários
        merchant.BankData = new BankData();
        merchant.BankData.Bank = new Bank("041");
        merchant.BankData.BankAgency = "1676";
        merchant.BankData.BankAgencyDigit = "0";
        merchant.BankData.BankAccount = "41776";
        merchant.BankData.BankAccountDigit = "7";
        merchant.BankData.Operation = "3";


        var splitBoleto = new MerchantSplit();
        splitBoleto.IsSubaccountTaxPayer = false;
        splitBoleto.PaymentMethodCode = "1";
        splitBoleto.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        var splitCredito = new MerchantSplit();
        splitCredito.IsSubaccountTaxPayer = false;
        splitCredito.PaymentMethodCode = "2";
        splitCredito.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        var splitBitcoin = new MerchantSplit();
        splitCredito.IsSubaccountTaxPayer = false;
        splitCredito.PaymentMethodCode = "3";
        splitCredito.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );


        var splitDebito = new MerchantSplit();
        splitDebito.IsSubaccountTaxPayer = false;
        splitDebito.PaymentMethodCode = "4";
        splitDebito.Taxes.push(
            new MerchantSplitTax("1", "1.00"),
        );

        //splits
        merchant.MerchantSplit.push(splitBoleto, splitCredito, splitDebito);


        const response = await MarketplaceRequest.Update(merchant);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });

    it('DELETE', async () => {
        var Id = 828;
        const response = await MarketplaceRequest.Delete(Id);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });


    it('LIST', async () => {
        var PageNumber = 1;
        var RowsPage = 10;

        const response = await MarketplaceRequest.List(PageNumber, RowsPage);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });

    it('GET', async () => {
        var Id = 828;

        const response = await MarketplaceRequest.Get(Id);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });
});