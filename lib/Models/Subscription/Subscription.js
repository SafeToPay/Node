var Customer = require('../General/Customer');
var CreditCard = require('../Payment/CreditCard');

function SubscriptionRequest() {
    this.Customer = Customer;
    this.Plan = 0;
    this.CreditCard = CreditCard;
    this.IsSendSMS = null;
    this.IsSendEmail = null;
    this.Emails = [];
    this.Token = null;
}

module.exports = SubscriptionRequest;