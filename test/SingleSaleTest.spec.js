const safe2pay = require('../dist/safe2pay');

const SingleSaleRequest = safe2pay.api.SingleSaleRequest;
var SingleSale = safe2pay.model.singlesale.SingleSale;
var Costumer = safe2pay.model.general.Customer;
var Address = safe2pay.model.general.Address;

var SingleSalePayment = safe2pay.model.singlesale.SingleSalePayment;
var SingleSalePaymentMethod = safe2pay.model.singlesale.SingleSalePaymentMethod;
var SingleSaleProduct = safe2pay.model.singlesale.SingleSaleProduct;


const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('SingleSale Test', function () {

    before(function () {
        const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

    });

    it('ADD', async () => {

        var sale = new SingleSale();

        sale.DueDate = "2019-10-19";
        sale.Instruction = "Instrução";
        sale.DiscountAmount = 5;
        sale.PenaltyAmount = 2.00;
        sale.InterestAmount = 2.00;
        sale.CallbackUrl = "https://webhook.site/8161f4bd-d850-4c53-9934-c86a50e6910b";
        sale.Emails = [
            "lucas@safe2pay.com.br"
        ];
        sale.Messages = [
            "mensagem1",
            "Mensagem 2"
        ];
        sale.Products = [
            new SingleSaleProduct ("Produto 1",2.49,3),
            new SingleSaleProduct ("Produto 2",2.49,3),
            new SingleSaleProduct ("Produto 3",2.49,3),
        ];
        sale.PaymentMethods = [
            {
                "CodePaymentMethod": "1"
            },
            {
                "CodePaymentMethod": "2"
            },
            {
                "CodePaymentMethod": "3"
            },
            {
                "CodePaymentMethod": "4"
            }
        ];

        sale.Customer =  new Costumer();
        sale.Customer.Identity = "39047266099";
        sale.Customer.Name = "João da Silva";
        sale.Customer.Email = "lucas@safe2pay.com.br";
        sale.Customer.Phone = "51999999999";

        sale.Customer.Address = new Address();
        sale.Customer.Address.Street =  "Logradouro";
        sale.Customer.Address.Number =  "123";
        sale.Customer.Address.District =  "Higienopolis";
        sale.Customer.Address.ZipCode =  "90670090";
        sale.Customer.Address.Complement =  "Complemento";
        sale.Customer.Address.CityName =  "Porto Alegre";
        sale.Customer.Address.StateInitials =  "RS";
        sale.Customer.Address.CountryName =  "Brasil";

        const response = await SingleSaleRequest.Add(sale);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });

    it('UPDATE', async () => {

        var sale = new SingleSale();
        sale.SingleSaleHash = "7a69135aab484a0f9fa5550cf4586346";
        sale.DueDate = "2019-10-19";
        sale.Instruction = "Instrução";
        sale.DiscountAmount = 5;
        sale.PenaltyAmount = 2.00;
        sale.InterestAmount = 2.00;
        sale.CallbackUrl = "https://webhook.site/8161f4bd-d850-4c53-9934-c86a50e6910b";
        sale.Emails = [
            "lucas@safe2pay.com.br"
        ];
        sale.Products = [
            new SingleSaleProduct ("Produto 1",2.49,3),
            new SingleSaleProduct ("Produto 2",2.49,3),
            new SingleSaleProduct ("Produto 3",2.49,3),
        ];
        sale.Messages = [
            "mensagem1",
            "Mensagem 2"
        ];
        sale.PaymentMethods = [
            {
                "CodePaymentMethod": "1"
            },
            {
                "CodePaymentMethod": "2"
            },
            {
                "CodePaymentMethod": "3"
            },
            {
                "CodePaymentMethod": "4"
            }
        ];

        sale.Customer =  new Costumer();
        sale.Customer.Identity = "39047266099";
        sale.Customer.Name = "João da Silva";
        sale.Customer.Email = "lucas@safe2pay.com.br";
        sale.Customer.Phone = "51999999999";

        sale.Customer.Address = new Address();
        sale.Customer.Address.Street =  "Logradouro";
        sale.Customer.Address.Number =  "123";
        sale.Customer.Address.District =  "Higienopolis";
        sale.Customer.Address.ZipCode =  "90670090";
        sale.Customer.Address.Complement =  "Complemento";
        sale.Customer.Address.CityName =  "Porto Alegre";
        sale.Customer.Address.StateInitials =  "RS";
        sale.Customer.Address.CountryName =  "Brasil";


        const response = await SingleSaleRequest.Update(sale);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });

    it('DELETE', async () => {
        var SingleSaleHash = "7a69135aab484a0f9fa5550cf4586346";
        const response = await SingleSaleRequest.Delete(SingleSaleHash);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });


    it('RESEND', async () => {
        var SingleSaleHash = "7a69135aab484a0f9fa5550cf4586346";

        const response = await SingleSaleRequest.Resend(SingleSaleHash);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });

    it('GET', async () => {
        var SingleSaleHash = "7a69135aab484a0f9fa5550cf4586346";

        const response = await SingleSaleRequest.Get(SingleSaleHash);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.Id).to.not.equal(0);
    });
});