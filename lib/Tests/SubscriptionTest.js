

var subscriptionFunctions = require('../Request/SubscriptionRequest');
var Address = require('../Models/General/Address');
var Customer = require('../Models/General/Customer');
var Subscription = require('../Models/Subscription/Subscription');

var subscription = new Subscription();
subscription.Plan = 68;
subscription.ChargeDate = "2019-06-30";
subscription.IsSandbox = true;

subscription.SubscriptionObject = {
    //Cartão de crédito
    // TokenCard: 'eb8a1d78-add8-46ab-ae33-9039d8429381'

    //Débito em conta 
    Bank: {
        Code: "341"
    },
    BankAccount: "5432",
    BankAccountDigit: "1",
    BankAgency: "1234",
    BankAgencyDigit: "5" 
}

subscription.Customer = new Customer();
subscription.customer.Name = "João da silva";
subscription.customer.Identity = "31037942000178";
subscription.customer.Phone = "51999999999";
subscription.customer.Email = "safe2pay@safe2pay.com.br";

subscription.customer.Address = new Address();
subscription.customer.Address.ZipCode = "90670090";
subscription.customer.Address.Street = "Logradouro";
subscription.customer.Address.Complement = "Complemento";
subscription.customer.Address.Number = "123";
subscription.customer.Address.District  = "Higienopolis";
subscription.customer.Address.StateInitials = "RS";
subscription.customer.Address.CityName = "Porto Alegre";
subscription.customer.Address.CountryName = "Brasil";


var repsonseAdd = subscriptionFunctions.Add();
console.log(repsonseAdd);


var Id = 825;
var responseGet = subscriptionFunctions.Get(Id);
console.log(responseGet);