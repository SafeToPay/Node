
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

## Instalação

```
npm i safe2pay
```

## Utilização

A integração com a API do Safe2Pay se dá pelo modelo RESTful, de forma a realizar a transferência segura e simplificada dos dados pelo formato JSON. Para facilitar o envio dos dados, deve-se montar um objeto para envio baseado nos modelos disponíveis, com exemplos abaixo, e a própria chamada do método desejado realizará o tratamento e conversão deste objeto para JSON. 

#### Exemplo

* const safe2pay = require('safe2pay');
* const environment = safe2pay.environment.setApiKey('x-api-key');


A biblioteca contém os modelos para as requisições via api, necessitando passar somente o modelo do objeto a ser enviado.
Após a importação da biblioteca para utilizar basta utilizar o comando  'safe2pay.api' e utilizar o módulo desejado.

As APIs do inclusas na SDK são:

    AccountDepositRequest
    MarketplaceRequest
    PaymentRequest
    TokenizationRequest
    TransactionRequest

Para a importação dos objetos basta utilizar o comando 'safe2pay.model'

Os modelos inclusos são:

```
Transfer
TransferRegister
Transaction
TransactionStatus
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
```
   

### Tratamento das respostas da API

Após o envio, a própria chamada devolverá a resposta em um objeto completo com as propriedades desta, onde um cast das classes de resposta permitirá o tratamento das propriedades do objeto de retorno de forma simplificada, sem a necessidade de criar os mesmos modelos em seu projeto.


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
13 = CHARGEBACK
```


### Consultar transação

```javascript
const safe2pay = require('safe2pay');
const environment = safe2pay.environment.setApiKey('x-api-key');

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
const environment = safe2pay.environment.setApiKey('x-api-key');

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
const environment = safe2pay.environment.setApiKey('x-api-key');
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

    PaymentRequest.Payment(payload)
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
const environment = safe2pay.environment.setApiKey('x-api-key');
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


    PaymentRequest.Payment(payload)
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
const environment = safe2pay.environment.setApiKey('x-api-key');
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


    PaymentRequest.Payment(payload)
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
const environment = safe2pay.environment.setApiKey('x-api-key');
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

    PaymentRequest.Payment(payload)
        .then(function (result) {

             //...

        }, function (err) {

             //...

        });
// ...
```


### Cancelando uma venda

```javascript

const safe2pay = require('safe2pay');
const environment = safe2pay.environment.setApiKey('x-api-key');
const TokenizationRequest = safe2pay.api.TokenizationRequest;
var CreditCard = safe2pay.model.payment.CreditCard;

 var Id = 851356;

var CancelType =  PaymentRequest.CancelType.BANKSLIP;
//var CancelType =  PaymentRequest.CancelType.CREDIT;
//var CancelType =  PaymentRequest.CancelType.DEBIT;

const response = await PaymentRequest.Refund(Id,CancelType);

    PaymentRequest.Refund(Id,type)
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
