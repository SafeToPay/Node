// var Id = 825;
// Get(Id);



var  address = new addressRequestObj.Address();
address.ZipCode = "90670090";
address.Street = "Logradouro";
address.Complement = "Complemento";
address.Number = "123";
address.District  = "Higienopolis";
address.StateInitials = "RS";
address.CityName = "Porto Alegre";
address.CountryName = "Brasil";

var customer = new customerRequestObj.Customer(
    "João da silva", 
    "31037942000178", 
    "51999999999", 
    "safe2pay@safe2pay.com.br",
    address);

var subscription = new  subscriptionObj.SubscriptionRequest();

subscription.Customer = customer;
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


subscription = util.RemoveObjectKeys(subscription);

Add(subscription);
