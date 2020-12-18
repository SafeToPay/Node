const safe2pay = require('../dist/safe2pay');
//api
const PaymentRequest = safe2pay.api.PaymentRequest;
//modelos
var CreditCard = safe2pay.model.payment.CreditCard;
var DebitCard = safe2pay.model.payment.DebitCard;
var BankSlip = safe2pay.model.payment.Bankslip;
var BankData = safe2pay.model.bank.BankData;

var Carnet = safe2pay.model.payment.Carnet;
var CarnetLot = safe2pay.model.payment.CarnetLot;
var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;

const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


debugger;

describe('Payment', function () {

    before(function () {
        const environment = safe2pay.environment.setApiKey('5A3A044DE838403F9566BDFBEE9DE763');

    });

    it('GetPaymentMethods', async () => {
        const response = await PaymentRequest.GetPaymentMethods();
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('Bankslip', async () => {

        //Inicializar método de pagamento
        var payload = new Transaction();
        //Ambiente de homologação
        payload.IsSandbox = true;
        //Descrição geral 
        payload.Application = "Teste SDK  NodeJS";
        //Nome do vendedor
        payload.Vendor = "João da Silva"
        //Url de callback
        payload.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";
        //Código da forma de pagamento
        // 1 - Boleto bancário
        // 2 - Cartão de crédito
        // 3 - Criptomoeda
        // 4 - Cartão de débito 
        // 10 - Débito em conta 
        payload.PaymentMethod = "1";

        //Informa o objeto de pagamento

        //Objeto de pagamento - para boleto bancário
        var bankslip = new BankSlip();
        bankslip.DueDate = "30/10/2019";
        bankslip.CancelAfterDue = false;
        bankslip.IsEnablePartialPayment = false;
        bankslip.PenaltyRate = 2.00;
        bankslip.InterestRate = 0.40;
        bankslip.Instruction = "Instrução de Exemplo";
        bankslip.Message = [
            "Mensagem 1",
            "Mensagem 2",
            "Mensagem 3"
        ];


        payload.PaymentObject = bankslip;

        //Lista de produtos incluídos na cobrança
        payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

        //Dados do endereço do cliente
        var address = new Address();
        address.ZipCode = "90670090";
        address.Street = "Logradouro";
        address.Complement = "Complemento";
        address.Number = "123";
        address.District = "Higienopolis";
        address.StateInitials = "RS";
        address.CityName = "Porto Alegre";
        address.CountryName = "Brasil";

        //Dados do cliente
        var customer = new Customer();
        customer.Name = "João da silva";
        customer.Identity = "18978393080";
        customer.Phone = "51999999999";
        customer.Email = "safe2pay@safe2pay.com.br";
        customer.Address = address;

        payload.Customer = customer;

        const response = await PaymentRequest.Payment(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CreditCard', async () => {

        //Inicializar método de pagamento
        var payload = new Transaction();
        //Ambiente de homologação
        payload.IsSandbox = true;
        //Descrição geral 
        payload.Application = "Teste SDK  NodeJS";
        //Nome do vendedor
        payload.Vendor = "João da Silva"
        //Url de callback
        payload.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";
        //Código da forma de pagamento
        // 1 - Boleto bancário
        // 2 - Cartão de crédito
        // 3 - Criptomoeda
        // 4 - Cartão de débito 
        // 10 - Débito em conta 
        payload.PaymentMethod = "2";

        //Informa o objeto de pagamento

        //Objeto de pagamento - para boleto bancário
        var creditCard = new CreditCard();
        creditCard.Holder = "22/07/2019";
        creditCard.CardNumber = "4024007153763191";
        creditCard.ExpirationDate = "12/2019";
        creditCard.SecurityCode = "241";

        //Lista de produtos incluídos na cobrança
        payload.PaymentObject = creditCard;
        payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

        //Dados do endereço do cliente
        var address = new Address();
        address.ZipCode = "90670090";
        address.Street = "Logradouro";
        address.Complement = "Complemento";
        address.Number = "123";
        address.District = "Higienopolis";
        address.StateInitials = "RS";
        address.CityName = "Porto Alegre";
        address.CountryName = "Brasil";

        //Dados do cliente
        var customer = new Customer();
        customer.Name = "João da silva";
        customer.Identity = "18978393080";
        customer.Phone = "51999999999";
        customer.Email = "safe2pay@safe2pay.com.br";
        customer.Address = address;

        payload.Customer = customer;

        const response = await PaymentRequest.Payment(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CryptoCurrency', async () => {


        //Inicializar método de pagamento
        var payload = new Transaction();
        //Ambiente de homologação
        payload.IsSandbox = true;
        //Descrição geral 
        payload.Application = "Teste SDK  NodeJS";
        //Nome do vendedor
        payload.Vendor = "João da Silva"
        //Url de callback
        payload.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";
        //Código da forma de pagamento
        // 1 - Boleto bancário
        // 2 - Cartão de crédito
        // 3 - Criptomoeda
        // 4 - Cartão de débito 
        // 10 - Débito em conta 
        payload.PaymentMethod = "3";

        //Lista de produtos incluídos na cobrança
        payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

        //Dados do endereço do cliente
        var address = new Address();
        address.ZipCode = "90670090";
        address.Street = "Logradouro";
        address.Complement = "Complemento";
        address.Number = "123";
        address.District = "Higienopolis";
        address.StateInitials = "RS";
        address.CityName = "Porto Alegre";
        address.CountryName = "Brasil";

        //Dados do cliente
        var customer = new Customer();
        customer.Name = "João da silva";
        customer.Identity = "18978393080";
        customer.Phone = "51999999999";
        customer.Email = "safe2pay@safe2pay.com.br";
        customer.Address = address;

        payload.Customer = customer;

        const response = await PaymentRequest.Payment(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('Pix', async () => {


        //Inicializar método de pagamento
        var payload = new Transaction();
        //Ambiente de homologação
        payload.IsSandbox = true;
        //Descrição geral 
        payload.Application = "Teste SDK  NodeJS";
        //Nome do vendedor
        payload.Vendor = "João da Silva"
        //Url de callback
        payload.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";
        //Código da forma de pagamento
        // 1 - Boleto bancário
        // 2 - Cartão de crédito
        // 3 - Criptomoeda
        // 4 - Cartão de débito 
        // 6 - Pix
        payload.PaymentMethod = "6";

        //Lista de produtos incluídos na cobrança
        payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

        //Dados do endereço do cliente
        var address = new Address();
        address.ZipCode = "90670090";
        address.Street = "Logradouro";
        address.Complement = "Complemento";
        address.Number = "123";
        address.District = "Higienopolis";
        address.StateInitials = "RS";
        address.CityName = "Porto Alegre";
        address.CountryName = "Brasil";

        //Dados do cliente
        var customer = new Customer();
        customer.Name = "João da silva";
        customer.Identity = "18978393080";
        customer.Phone = "51999999999";
        customer.Email = "safe2pay@safe2pay.com.br";
        customer.Address = address;

        payload.Customer = customer;

        const response = await PaymentRequest.Payment(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('DebitCard', async () => {


        //Inicializar método de pagamento
        var payload = new Transaction();
        //Flag de autenticação para o débito
        payload.Authenticate = true;
        //Ambiente de homologação
        payload.IsSandbox = true;
        //Descrição geral 
        payload.Application = "Teste SDK  NodeJS";
        //Nome do vendedor
        payload.Vendor = "João da Silva"
        //Url de callback
        payload.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";
        //Código da forma de pagamento
        // 1 - Boleto bancário
        // 2 - Cartão de crédito
        // 3 - Criptomoeda
        // 4 - Cartão de débito 
        // 10 - Débito em conta 
        payload.PaymentMethod = "4";

        //Informa o objeto de pagamento

        //Objeto de pagamento - para boleto bancário
        var debitCard = new DebitCard();
        debitCard.Holder = "22/07/2019";
        debitCard.CardNumber = "4024007153763191";
        debitCard.ExpirationDate = "12/2019";
        debitCard.SecurityCode = "241";

        payload.PaymentObject = debitCard;

        //Lista de produtos incluídos na cobrança
        payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

        //Dados do endereço do cliente
        var address = new Address();
        address.ZipCode = "90670090";
        address.Street = "Logradouro";
        address.Complement = "Complemento";
        address.Number = "123";
        address.District = "Higienopolis";
        address.StateInitials = "RS";
        address.CityName = "Porto Alegre";
        address.CountryName = "Brasil";

        //Dados do cliente
        var customer = new Customer();
        customer.Name = "João da silva";
        customer.Identity = "18978393080";
        customer.Phone = "51999999999";
        customer.Email = "safe2pay@safe2pay.com.br";
        customer.Address = address;

        payload.Customer = customer;

        const response = await PaymentRequest.Payment(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('Carnet', async () => {
        //Inicializar método de pagamento
        var payload = new Transaction();
        //Ambiente de homologação
        payload.IsSandbox = true;
        //Descrição geral 
        payload.Application = "Teste SDK  NodeJS";
        //Nome do vendedor
        payload.Vendor = "João da Silva"
        //Url de callback
        payload.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";
        //Código da forma de pagamento
        // 1 - Boleto bancário
        // 2 - Cartão de crédito
        // 3 - Criptomoeda
        // 4 - Cartão de débito 
        // 10 - Débito em conta 
        payload.PaymentMethod = "1";

        //Informa o objeto de pagamento

        //Objeto de pagamento - para boleto bancário
        var carnet = new Carnet();
        carnet.Message = "Teste";
        carnet.PenaltyAmount = 10;
        carnet.InterestAmount = 10;

        for (let index = 0; index < 15; index++) {

            bankslip = new BankSlip();
            bankslip.DueDate = new Date(2019, 10, 22);
            bankslip.Amount = 1.99;
            bankslip.Message = [
                "Mensagem 1",
                "Mensagem 2",
                "Mensagem 3"
            ];

            carnet.BankSlips.push(bankslip);
        }

        payload.PaymentObject = carnet;

        //Lista de produtos incluídos na cobrança
        payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
        payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

        //Dados do endereço do cliente
        var address = new Address();
        address.ZipCode = "90670090";
        address.Street = "Logradouro";
        address.Complement = "Complemento";
        address.Number = "123";
        address.District = "Higienopolis";
        address.StateInitials = "RS";
        address.CityName = "Porto Alegre";
        address.CountryName = "Brasil";

        //Dados do cliente
        var customer = new Customer();
        customer.Name = "João da silva";
        customer.Identity = "18978393080";
        customer.Phone = "51999999999";
        customer.Email = "safe2pay@safe2pay.com.br";
        customer.Address = address;

        payload.Customer = customer;

        const response = await PaymentRequest.Carnet(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CarnetLot', async () => {

        var lote = new CarnetLot();
        lote.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";

        for (let index = 0; index < 200; index++) {


            //Inicializar método de pagamento
            var payload = new Transaction();
            //Ambiente de homologação
            payload.IsSandbox = true;
            //Descrição geral 
            payload.Application = "Teste SDK  NodeJS";
            //Nome do vendedor
            payload.Vendor = "João da Silva"

            //Código da forma de pagamento
            // 1 - Boleto bancário
            // 2 - Cartão de crédito
            // 3 - Criptomoeda
            // 4 - Cartão de débito 
            // 10 - Débito em conta 
            payload.PaymentMethod = "1";

            //Informa o objeto de pagamento

            //Objeto de pagamento - para boleto bancário
            var carnet = new Carnet();
            carnet.Message = "Teste";
            carnet.PenaltyAmount = 10;
            carnet.InterestAmount = 10;

            for (let index = 0; index < 15; index++) {

                bankslip = new BankSlip();
                bankslip.DueDate = new Date(2019, 10, 22);
                bankslip.Amount = 1.99;
                bankslip.Message = [
                    "Mensagem 1",
                    "Mensagem 2",
                    "Mensagem 3"
                ];

                carnet.BankSlips.push(bankslip);
            }

            payload.PaymentObject = carnet;

            //Lista de produtos incluídos na cobrança
            payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
            payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
            payload.Products.push(new Product("002", "Teste 1", 1.99, 10));

            //Dados do endereço do cliente
            var address = new Address();
            address.ZipCode = "90670090";
            address.Street = "Logradouro";
            address.Complement = "Complemento";
            address.Number = "123";
            address.District = "Higienopolis";
            address.StateInitials = "RS";
            address.CityName = "Porto Alegre";
            address.CountryName = "Brasil";

            //Dados do cliente
            var customer = new Customer();
            customer.Name = "João da silva";
            customer.Identity = "01783000217";
            customer.Phone = "51999999999";
            customer.Email = "safe2pay@safe2pay.com.br";
            customer.Address = address;

            payload.Customer = customer;


            lote.Items.push(payload);

        }

        const response = await PaymentRequest.CarnetLot(payload);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CarnetGet', async () => {

        var identifier = "4b9d8c72e9474f53910af6a27bf7000b";

        const response = await PaymentRequest.CarnetGet(identifier);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CarnetGetLot', async () => {

        var identifier = "4b9d8c72e9474f53910af6a27bf7000b";

        const response = await PaymentRequest.CarnetGetLot(identifier);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('ResendCarnet', async () => {

        var identifier = "4b9d8c72e9474f53910af6a27bf7000b";

        const response = await PaymentRequest.ResendCarnet(identifier);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CancelCarnet', async () => {

        var identifier = "4b9d8c72e9474f53910af6a27bf7000b";

        const response = await PaymentRequest.CancelCarnet(identifier);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('CancelCarnetLot', async () => {

        var identifier = "4b9d8c72e9474f53910af6a27bf7000b";

        const response = await PaymentRequest.CancelCarnetLot(identifier);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });

    it('Refund', async () => {

        var Id = 851356;
        
       var CancelType =  PaymentRequest.CancelType.BANKSLIP;
        //var CancelType =  PaymentRequest.CancelType.CREDIT;
        //var CancelType =  PaymentRequest.CancelType.DEBIT;

        const response = await PaymentRequest.Refund(Id,CancelType);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail.TokenCard).to.not.equal(null);
    });
});