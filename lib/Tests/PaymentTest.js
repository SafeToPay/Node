
var CreditCard = require('../Models/Payment/CreditCard');
var DebitCard = require('../Models/Payment/DebitCard');
var Bankslip = require('../Models/Payment/Bankslip');
var BankData = require('../Models/Bank/BankData');
var Carnet = require('../Models/Payment/Carnet');
var CarnetLot = require('../Models/Payment/CarnetLot');
var Transaction = require('../Models/Transaction/Transaction');
var Customer = require('../Models/General/Customer');
var Product = require('../Models/General/Product');
var Address = require('../Models/General/Address');

var PaymentRequest = require('../Request/PaymentRequest');

function BankslipTest() {

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
    var bankslip = new Bankslip();
    bankslip.DueDate = "22/07/2019";
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
    //Lista de produtos incluídos na cobrança
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
    var customer = new  Customer();
    customer.Name = "João da silva";
    customer.Identity = "João da silva";
    customer.Phone = "51999999999";
    customer.Email = "safe2pay@safe2pay.com.br";
    customer.Address = address;

    payload.Customer = customer;

    PaymentRequest.BankSlip(payload);
}

function CreditCardTest() {

    //Inicializar método de pagamento
    var payload = new  Transaction();
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
    var creditCard = new  CreditCard();
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
    var customer = new  Customer();
    customer.Name = "João da silva";
    customer.Identity = "João da silva";
    customer.Phone = "51999999999";
    customer.Email = "safe2pay@safe2pay.com.br";
    customer.Address = address;

    payload.Customer = customer;


    PaymentRequest.CreditCard(payload);
}

function CryptoCurrencyTest() {

    //Inicializar método de pagamento
    var payload = new  Transaction();
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
   var customer = new  Customer();
   customer.Name = "João da silva";
   customer.Identity = "João da silva";
   customer.Phone = "51999999999";
   customer.Email = "safe2pay@safe2pay.com.br";
   customer.Address = address;

   payload.Customer = customer;


    PaymentRequest.CryptoCurrency(payload);
}

function DebitCardTest() {

    //Inicializar método de pagamento
    var payload = new  Transaction();
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
    var debitCard = new  DebitCard();
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
    var customer = new  Customer();
    customer.Name = "João da silva";
    customer.Identity = "João da silva";
    customer.Phone = "51999999999";
    customer.Email = "safe2pay@safe2pay.com.br";
    customer.Address = address;

    payload.Customer = customer;

    PaymentRequest.DebitCard(payload);
}

function DebitAccountTest() {

    //Inicializar método de pagamento
    var payload = new  Transaction();
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
    payload.PaymentMethod = "10";

    //Informa o objeto de pagamento

    //Objeto de pagamento - para boleto bancário
    var bankData = new  BankData();
    bankData.Bank = "033";
    bankData.BankAgency = "0435";
    bankData.BankAgencyDigit = "1";
    bankData.BankAccount = "7879487";
    bankData.BankAccountDigit = "2";

    payload.PaymentObject = {
        BankData: bankData,
        DueDate: "2019-05-30"
    };

    //Lista de produtos incluídos na cobrança
    payload.Products.push(new Product("001", "Teste 1", 1.99, 10));
    payload.Products.push(new Product("002", "Teste 1", 1.99, 10));
    payload.Products.push(new Product("002", "Teste 1", 1.99, 10));


  //Dados do cliente
  var customer = new  Customer();
  customer.Name = "João da silva";
  customer.Identity = "55959596595952";


    PaymentRequest.DebitAccount(payload);
}

function RefundTest() {
    var Id = 516396;
    Refund(Id);
}

function CarneTest() {

    //Inicializar método de pagamento
    var payload = new  Transaction();
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
   var carnet = new  Carnet();
    carnet.Message = "Teste";
    carnet.PenaltyAmount = 10;
    carnet.InterestAmount = 10;

    bankslip = new  BankSlip();
    bankslip.DueDate = new Date(2019,9,22);
    bankslip.Amount = 1.99;
    bankslip.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip2 = new  BankSlip();
    bankslip2.DueDate =  new Date(2019,10,22);
    bankslip2.Amount = 1.99;
    bankslip2.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip3 = new  BankSlip();
    bankslip3.DueDate =  new Date(2019,11,22);
    bankslip3.Amount = 1.99;
    bankslip3.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];


    carnet.BankSlips.push(bankslip);
    carnet.BankSlips.push(bankslip2);
    carnet.BankSlips.push(bankslip3);

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
    var customer = new  Customer();
    customer.Name = "João da silva";
    customer.Identity = "01783000217";
    customer.Phone = "51999999999";
    customer.Email = "safe2pay@safe2pay.com.br";
    customer.Address = address;

    payload.Customer = customer;

    PaymentRequest.Carnet(payload);
}

function CarnetLotTest(){



    var lote = new   CarnetLot();
    lote.CallbackUrl = "https://callbacks.exemplo.com.br/api/Notify";

    //Inicializar método de pagamento
    var payload = new  Transaction();
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
   var carnet = new  Carnet();
    carnet.Message = "Teste";
    carnet.PenaltyAmount = 10;
    carnet.InterestAmount = 10;

    bankslip = new  BankSlip();
    bankslip.DueDate = new Date(2019,9,22);
    bankslip.Amount = 1.99;
    bankslip.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip2 = new  BankSlip();
    bankslip2.DueDate =  new Date(2019,10,22);
    bankslip2.Amount = 1.99;
    bankslip2.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip3 = new  BankSlip();
    bankslip3.DueDate =  new Date(2019,11,22);
    bankslip3.Amount = 1.99;
    bankslip3.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];


    carnet.BankSlips.push(bankslip);
    carnet.BankSlips.push(bankslip2);
    carnet.BankSlips.push(bankslip3);

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
    var customer = new  Customer();
    customer.Name = "João da silva";
    customer.Identity = "01783000217";
    customer.Phone = "51999999999";
    customer.Email = "safe2pay@safe2pay.com.br";
    customer.Address = address;

    payload.Customer = customer;


    lote.Items.push(payload);

    
    //Inicializar método de pagamento
    var payload = new  Transaction();
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
   var carnet = new  Carnet();
    carnet.Message = "Teste";
    carnet.PenaltyAmount = 10;
    carnet.InterestAmount = 10;

    bankslip = new  BankSlip();
    bankslip.DueDate = new Date(2019,9,22);
    bankslip.Amount = 1.99;
    bankslip.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip2 = new  BankSlip();
    bankslip2.DueDate =  new Date(2019,10,22);
    bankslip2.Amount = 1.99;
    bankslip2.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip3 = new  BankSlip();
    bankslip3.DueDate =  new Date(2019,11,22);
    bankslip3.Amount = 1.99;
    bankslip3.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];


    carnet.BankSlips.push(bankslip);
    carnet.BankSlips.push(bankslip2);
    carnet.BankSlips.push(bankslip3);

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
   var customer = new  Customer();
   customer.Name = "João da silva";
   customer.Identity = "01783000217";
   customer.Phone = "51999999999";
   customer.Email = "safe2pay@safe2pay.com.br";
   customer.Address = address;

   payload.Customer = customer;


    lote.Items.push(payload);


    PaymentRequest.CarnetLot(payload);

}



//GetPaymentMethods();
//BankslipTest();
//CreditCardTest();
//CryptoCurrencyTest();
//DebitCardTest();
//DebitAccountTest();
//RefundTest();
//CarneTest();
//CarnetLotTest();