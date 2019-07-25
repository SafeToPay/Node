
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
* [x] Gerenciamento de subcontas para Marketplace.
* [x] Venda simples.
* [x] Recorrência.

## Utilização

A integração com a API do Safe2Pay se dá pelo modelo RESTful, de forma a realizar a transferência segura e simplificada dos dados pelo formato JSON. Para facilitar o envio dos dados, deve-se montar um objeto para envio baseado nos modelos disponíveis, com exemplos abaixo, e a própria chamada do método desejado realizará o tratamento e conversão deste objeto para JSON. 


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

### Criando uma venda com Boleto

```javascript
//Inicializar método de pagamento
    var payload = new TransactionObj.Transaction();
    //Ambiente de homologação
    payload.IsSandbox = true;
    //Descrição geral 
    payload.Application = "Teste SDK PHP";
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
    var bankslip = new BankslipObj.BankSlip();
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
    payload.PaymentObject = bankslip;
    payload.Products.push(new ProductObj.Product("001", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));

    //Dados do endereço do cliente
    var address = new AddressObj.Address();
    address.ZipCode = "90670090";
    address.Street = "Logradouro";
    address.Complement = "Complemento";
    address.Number = "123";
    address.District = "Higienopolis";
    address.StateInitials = "RS";
    address.CityName = "Porto Alegre";
    address.CountryName = "Brasil";

    //Dados do cliente
    var customer = new CustomerObj.Customer(
        "João da silva",
        "31037942000178",
        "51999999999",
        "safe2pay@safe2pay.com.br",
        address);

    payload.Customer = customer;


    payload = util.RemoveObjectKeys(payload);

    BankSlip(payload);

// ...
```

### Criando uma venda com cartão de crédito

```javascript
//Inicializar método de pagamento
    var payload = new TransactionObj.Transaction();
    //Ambiente de homologação
    payload.IsSandbox = true;
    //Descrição geral 
    payload.Application = "Teste SDK PHP";
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
    var creditCard = new CreditObj.CreditCard();
    creditCard.Holder = "22/07/2019";
    creditCard.CardNumber = "4024007153763191";
    creditCard.ExpirationDate = "12/2019";
    creditCard.SecurityCode = "241";

    //Lista de produtos incluídos na cobrança
    payload.PaymentObject = creditCard;
    payload.Products.push(new ProductObj.Product("001", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));

    //Dados do endereço do cliente
    var address = new AddressObj.Address();
    address.ZipCode = "90670090";
    address.Street = "Logradouro";
    address.Complement = "Complemento";
    address.Number = "123";
    address.District = "Higienopolis";
    address.StateInitials = "RS";
    address.CityName = "Porto Alegre";
    address.CountryName = "Brasil";

    //Dados do cliente
    var customer = new CustomerObj.Customer(
        "João da silva",
        "31037942000178",
        "51999999999",
        "safe2pay@safe2pay.com.br",
        address);

    payload.Customer = customer;


    payload = util.RemoveObjectKeys(payload);

    CreditCard(payload);

// ...
```

### Criando uma venda com Bitcoin

```javascript
 //Inicializar método de pagamento
    var payload = new TransactionObj.Transaction();
    //Ambiente de homologação
    payload.IsSandbox = true;
    //Descrição geral 
    payload.Application = "Teste SDK PHP";
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
    payload.Products.push(new ProductObj.Product("001", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));

    //Dados do endereço do cliente
    var address = new AddressObj.Address();
    address.ZipCode = "90670090";
    address.Street = "Logradouro";
    address.Complement = "Complemento";
    address.Number = "123";
    address.District = "Higienopolis";
    address.StateInitials = "RS";
    address.CityName = "Porto Alegre";
    address.CountryName = "Brasil";

    //Dados do cliente
    var customer = new CustomerObj.Customer(
        "João da silva",
        "31037942000178",
        "51999999999",
        "safe2pay@safe2pay.com.br",
        address);

    payload.Customer = customer;


    payload = util.RemoveObjectKeys(payload);

    CryptoCurrency(payload);

// ...
```

### Criando uma venda com cartão de débito

```javascript

    //Inicializar método de pagamento
    var payload = new TransactionObj.Transaction();
    //Ambiente de homologação
    payload.IsSandbox = true;
    //Descrição geral 
    payload.Application = "Teste SDK PHP";
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
    var debitCard = new DebitObj.DebitCard();
    debitCard.Holder = "22/07/2019";
    debitCard.CardNumber = "4024007153763191";
    debitCard.ExpirationDate = "12/2019";
    debitCard.SecurityCode = "241";

    payload.PaymentObject = debitCard;

    //Lista de produtos incluídos na cobrança
    payload.Products.push(new ProductObj.Product("001", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));
    payload.Products.push(new ProductObj.Product("002", "Teste 1", 1.99, 10));

    //Dados do endereço do cliente
    var address = new AddressObj.Address();
    address.ZipCode = "90670090";
    address.Street = "Logradouro";
    address.Complement = "Complemento";
    address.Number = "123";
    address.District = "Higienopolis";
    address.StateInitials = "RS";
    address.CityName = "Porto Alegre";
    address.CountryName = "Brasil";

    //Dados do cliente
    var customer = new CustomerObj.Customer(
        "João da silva",
        "31037942000178",
        "51999999999",
        "safe2pay@safe2pay.com.br",
        address);

    payload.Customer = customer;


    payload = util.RemoveObjectKeys(payload);

    DebitCard(payload);
// ...
```

### Tokenizando um cartão

```javascript

var card = require('../Models/Payment/CreditCard');

// ...
// ...
//Cria uma instância do objeto do cartão
//Nome, Número do cartão, Data de expiração e código de segurança 
var creditCard = new card.CreditCard();

creditCard.Holder = "João da Silva";
creditCard.CardNumber = "4024007153763191";
creditCard.ExpirationDate = "12/2019";
creditCard.SecurityCode = "241";

creditCard = util.RemoveObjectKeys(creditCard);

try {
//Realiza a tokenização e traz o retorno 

    var response = Create(creditCard);

} catch (Exception e) {

   // ...
}


// ...
```

### Consultar transação

```php
<?php

require('Request/TransactionRequest.php');
use Safe2Pay\Api\TransactionRequest;


$IdTransaction = 82548;


try {

    $response  =  TransactionRequest::Get($IdTransaction);

} catch (Exception $e) {

    echo  $e->getMessage();
}
// ...
```

## Informações adicionais / Contato

A orientação sobre a utilização da API também está disponível na documentação de referência da API, disponível aqui, porém salientamos que ela se encontra em atualização para a nova versão da API.

Em caso de dúvidas, ficamos à disposição em nossos canais ou diretamente pelo e-mail integracao@safe2pay.com.br.
