import Customer from '../General/Customer.js';
import CreditCard from '../Payment/CreditCard.js';


function SubscriptionRequest() {
    this.Customer = Customer;
    this.Plan = 0;
    this.CreditCard = CreditCard;
    this.IsSendSMS = null;
    this.IsSendEmail = null;
    this.Emails = [];
    this.Token = null;
}

export default SubscriptionRequest;