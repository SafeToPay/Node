// import da library do safe2pay
const safe2pay = require('../dist/safe2pay');

const SubscriptionRequest = safe2pay.api.SubscriptionRequest;
var Address = safe2pay.model.general.Address;
var Customer = safe2pay.model.general.Customer;
var Subscription = safe2pay.model.subscription.Subscription;


const chai = require('chai');
const subSet = require('chai-subset');
chai.use(subSet);


describe('Subscription Test', function () {

    before(function () {
        const enviroment = safe2pay.enviroment.setApiKey('5A3A044DE838403F9566BDFBEE9DE763');

    });

    it('ADD', async () => {

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

        const response = await SubscriptionRequest.Add(subscription);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail).to.not.equal(null);
    });

    it('GET', async () => {

        var Id = 825;

        const response = await SubscriptionRequest.Get(Id);
        chai.expect(response.HasError).to.equals(false);
        chai.expect(response.ResponseDetail).to.not.equal(null);
    });
});

