
# Safe2Pay NodeJS SDK

![Safe2Pay](https://safe2pay.com.br/static/img/banner-github.png)


## Principais recursos

* [x] Consulta de transações.
* [x] Tokenização de cartão.
* [x] Pagamentos.
    * [x] Boleto bancário.
    * [x] Cartão de crédito.
    * [x] Bitcoin.
    * [x] Cartão de débito.
    * [x] Carnê.
    * [x] Lote de Carnês.
* [x] Gerenciamento de subcontas para Marketplace.
* [x] Recorrência

## Instalação

```
npm i safe2pay
```

## Utilização

A integração com a API do Safe2Pay se dá pelo modelo RESTful, de forma a realizar a transferência segura e simplificada dos dados pelo formato JSON. Para facilitar o envio dos dados, deve-se montar um objeto para envio baseado nos modelos disponíveis, com exemplos abaixo, e a própria chamada do método desejado realizará o tratamento e conversão deste objeto para JSON. 

#### Exemplo

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');


A biblioteca contém os modelos para as requisições via api, necessitando passar somente o modelo do objeto a ser enviado.
Após a importação da biblioteca para utilizar basta utilizar o comando  'safe2pay.api' e utilizar o módulo desejado.

As APIs do inclusas na SDK são:

    AccountDepositRequest
    DebitAccountRequest
    MarketplaceRequest
    PaymentRequest
    PlanRequest
    SubscriptionRequest
    TokenizationRequest
    TransactionRequest

Para a importação dos objetos basta utilizar o comando 'safe2pay.model'

Os modelos inclusos são:


```
Transfer
TransferRegister
Transaction
TransactionStatus
Subscription
SingleSale
SingleSalePayment
SingleSalePaymentMethod
SingleSaleProduct
Bankslip
CreditCard
Bitcoin
DebitCard
DebbitAccount
BankTransfer
Carnet
CarnetItems
CarnetLot
PaymentMethod
Customer
Address
Product
Bank
BankData
Merchant
MerchantPaymentDate
MerchantPaymentMethod
MerchantSplit
MerchantSplitTax
MerchantType
TaxType
ListTax
Plan
PlanFrequence
```
   

### Tratamento das respostas da API

Após o envio, a própria chamada devolverá a resposta em um objeto completo com as propriedades desta, onde um cast das classes de resposta permitirá o tratamento das propriedades do objeto de retorno de forma simplificada, sem a necessidade de criar os mesmos modelos em seu projeto. Utilize a `CheckoutResponse` para transações ou `InvoiceResponse` para solicitações de cobrança.


## Pagamentos / Transações

A informação da forma de pagamento é dada por meio da propriedade `PaymentMethod`, onde deve ser informado o código correspondente ao método desejado:

1. Boleto Bancário;
2. Cartão de Crédito;
3. Bitcoin;
4. Cartão de Débito

O retorno do envio da transação trará um status para esta, que pode ser igual a:

```
1 = PENDENTE
2 = PROCESSAMENTO
3 = AUTORIZADO
4 = DISPONÍVEL
5 = EM DISPUTA
6 = DEVOLVIDO
7 = BAIXADO
8 = RECUSADO
11 = LIBERADO
12 = EM CANCELAMENTO
```


### Consultar transação

```javascript
const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

var TransactionRequest = safe2pay.api.TransactionRequest;

var Id = 848906;

TransactionRequest.Get(Id)
        .then(function (result) {

           //...

        }).catch(function(error) {    

            //...

          });
```

### Tokenizando um cartão

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

const TokenizationRequest = safe2pay.api.TokenizationRequest;
var CreditCard = safe2pay.model.payment.CreditCard;


var creditCard = new CreditCard();
creditCard.Holder = "João da Silva";
creditCard.CardNumber = "4024007153763191";
creditCard.ExpirationDate = "12/2019";
creditCard.SecurityCode = "241";


TokenizationRequest.Create(creditCard)
        .then(function (result) {

         //...

        }, function (err) {

        //...

        });      
```


### Criando uma venda com Boleto

```javascript
const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
//api
const PaymentRequest = safe2pay.api.PaymentRequest;

var BankSlip = safe2pay.model.payment.Bankslip;

var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;
  
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
    bankslip.DueDate = "22/08/2019";
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

    PaymentRequest.BankSlip(payload)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });

// ...
```

### Criando uma venda com cartão de crédito

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
//api
const PaymentRequest = safe2pay.api.PaymentRequest;
//modelos
var CreditCard = safe2pay.model.payment.CreditCard;
var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;


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


    PaymentRequest.CreditCard(payload)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });
// ...
```

### Criando uma venda com Bitcoin

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
//api
const PaymentRequest = safe2pay.api.PaymentRequest;

var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;


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


    PaymentRequest.CryptoCurrency(payload)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });
// ...
```

### Criando uma venda com cartão de débito

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
//api
const PaymentRequest = safe2pay.api.PaymentRequest;

var DebitCard = safe2pay.model.payment.DebitCard;

var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;

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

    PaymentRequest.DebitCard(payload)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });
// ...
```

### Criando uma venda com débito em conta

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
//api
const PaymentRequest = safe2pay.api.PaymentRequest;

var DebitCard = safe2pay.model.payment.DebitCard;
var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;

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
    payload.PaymentMethod = "10";

    //Informa o objeto de pagamento

    //Objeto de pagamento - para boleto bancário
    var bankData = new BankData();
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
    var customer = new Customer();
    customer.Name = "João da silva";
    customer.Identity = "18978393080";


    PaymentRequest.DebitAccount(payload)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });
// ...
```


### Estornando uma transação feita com cartão de crédito

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
const TokenizationRequest = safe2pay.api.TokenizationRequest;
var CreditCard = safe2pay.model.payment.CreditCard;

 var Id = 851356;

    PaymentRequest.Refund(Id)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });
// ...
```


### Criando uma venda com carnê

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

//api
const PaymentRequest = safe2pay.api.PaymentRequest;
var Carnet = safe2pay.model.payment.Carnet;
var Transaction = safe2pay.model.transaction.Transaction;
var Customer = safe2pay.model.general.Customer;
var Product = safe2pay.model.general.Product
var Address = safe2pay.model.general.Address;

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

    bankslip = new BankSlip();
    bankslip.DueDate = new Date(2019, 9, 22);
    bankslip.Amount = 1.99;
    bankslip.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip2 = new BankSlip();
    bankslip2.DueDate = new Date(2019, 10, 22);
    bankslip2.Amount = 1.99;
    bankslip2.Message = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3"
    ];

    bankslip3 = new BankSlip();
    bankslip3.DueDate = new Date(2019, 11, 22);
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
    var customer = new Customer();
    customer.Name = "João da silva";
    customer.Identity = "18978393080";
    customer.Phone = "51999999999";
    customer.Email = "safe2pay@safe2pay.com.br";
    customer.Address = address;

    payload.Customer = customer;

    PaymentRequest.Carnet(payload)
        .then(function (result) {

             //...

        }, function (err) {

            //...

        });
// ...
```



### Criando uma subconta

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

const MarketplaceRequest = safe2pay.api.MarketplaceRequest;
var BankData = safe2pay.model.bank.BankData;
var Bank = safe2pay.model.bank.Bank;
var Address = safe2pay.model.general.Address;
var Merchant = safe2pay.model.merchant.Merchant;
var MerchantSplit = safe2pay.model.merchant.MerchantSplit;
var MerchantSplitTax = safe2pay.model.merchant.MerchantSplitTax;
  
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

    
    var splitBoleto =  new MerchantSplit();
    splitBoleto.IsSubaccountTaxPayer = false;
    splitBoleto.PaymentMethodCode = "1";
    splitBoleto.Taxes.push(
        new MerchantSplitTax("1", "1.00"),
    );

    var splitCredito =  new MerchantSplit();
    splitCredito.IsSubaccountTaxPayer = false;
    splitCredito.PaymentMethodCode = "2";
    splitCredito.Taxes.push(
        new MerchantSplitTax("1", "1.00"),
    );

    var splitBitcoin =  new MerchantSplit();
    splitCredito.IsSubaccountTaxPayer = false;
    splitCredito.PaymentMethodCode = "3";
    splitCredito.Taxes.push(
        new MerchantSplitTax("1", "1.00"),
    );

    var splitDebito =  new MerchantSplit();
    splitDebito.IsSubaccountTaxPayer = false;
    splitDebito.PaymentMethodCode = "4";
    splitDebito.Taxes.push(
        new MerchantSplitTax("1", "1.00"),
    );

    //splits
    merchant.MerchantSplit.push(splitBoleto,splitCredito,splitDebito);


    MarketplaceRequest.Add(merchant)
        .then(function (result) {

            //...

        }, function (err) {

            //...

        });
// ...
```



### Listando subcontas

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');
  
   var PageNumber = 1;
    var RowsPage = 10;

    MarketplaceRequest.List(PageNumber, RowsPage)
        .then(function (result) {

            //...

        }, function (err) {

            //...

        });
// ...
```

### Criando um plano

```javascript

const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

const PlanRequest = safe2pay.api.PlanRequest;
var Plan = safe2pay.model.merchant.Plan;
var PlanFrequence = safe2pay.model.merchant.PlanFrequence;
  
    //UPDATE
    var plan = new Plan();
    //Frequencia do plano
    //Code Name
    // 1	Mensal
    // 2	Bimestral
    // 3	Trimestral
    // 4	Semestral
    // 5	Anual
    // 6	Semanal
    // 7	Diário
    plan.PlanFrequence = new PlanFrequence();
    plan.PlanFrequence.Code = "1";

    plan.Name = "Teste"; //Nome do plano
    plan.Description = "Integração"; // Descrição do plano
    plan.Amount = "10.00"; // Valor do plano
    plan.SubscriptionLimit = "200"; // Limite de adesões
    plan.DaysTrial = 30; // Período de teste 
    plan.DaysToInactive = "2"; // Dias de inadimplência
    plan.ChargeDay = "10"; // Dia de cobrança
    plan.SubscriptionTax = "20.00"; // Taxa de adesão
    plan.IsProRata = true; //Cobrança Pro-Rata
    plan.IsEnabled = true; //Ativado
    plan.IsImmediateCharge = false; //Cobrar imediatamente
    plan.CallbackUrl = "https://webhook.site/251107e2-bdb1-480d-934c-bab0eb413318"; // URL de callback para notificação via Webhook
    plan.ExpirationDate = "2019-08-10"; //Data de expiração do plano


    PlanRequest.Add(plan)
        .then(function (result) {

            //...

        }, function (err) {

             //...

        });
// ...
```


### Realizando uma adesão

```javascript
  
const safe2pay = require('safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key'); 

const SubscriptionRequest = safe2pay.api.SubscriptionRequest;
var Address = safe2pay.model.general.Address;
var Customer = safe2pay.model.general.Customer;
var Subscription = safe2pay.model.subscription.Subscription;

  
    var subscription = new Subscription();
    subscription.Plan = 68;
    subscription.ChargeDate = "2019-06-30";
    subscription.IsSandbox = true;

    subscription.SubscriptionObject = {
        //Cartão de crédito
        // TokenCard: 'eb8a1d78-add8-46ab-ae33-9039d8429381'

        //Débito em conta 
        Bank: {
            Code: "136"
        },
        BankAccount: "5432",
        BankAccountDigit: "1",
        BankAgency: "1234",
        BankAgencyDigit: "5"
    }

    subscription.Customer = new Customer();
    subscription.Customer.Name = "João da silva";
    subscription.Customer.Identity = "31037942000178";
    subscription.Customer.Phone = "51999999999";
    subscription.Customer.Email = "safe2pay@safe2pay.com.br";

    subscription.Customer.Address = new Address();
    subscription.Customer.Address.ZipCode = "90670090";
    subscription.Customer.Address.Street = "Logradouro";
    subscription.Customer.Address.Complement = "Complemento";
    subscription.Customer.Address.Number = "123";
    subscription.Customer.Address.District = "Higienopolis";
    subscription.Customer.Address.StateInitials = "RS";
    subscription.Customer.Address.CityName = "Porto Alegre";
    subscription.Customer.Address.CountryName = "Brasil";

    SubscriptionRequest.Add(subscription)
        .then(function (result) {

            //...

        }, function (err) {

            //...


        });
// ...
```


## Informações adicionais / Contato

A orientação sobre a utilização da API também está disponível na documentação de referência da API, disponível aqui, porém salientamos que ela se encontra em atualização para a nova versão da API.

Em caso de dúvidas, ficamos à disposição em nossos canais ou diretamente pelo e-mail integracao@safe2pay.com.br.
