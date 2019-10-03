
var Customer = require('../General/Customer');


function Transaction() {
    this.Id = 0;
    this.IdTransaction = 0;
    this.Authenticate = false;
    this.IsSandbox = true;
    this.Application = null;
    this.Reference = null;
    this.Vendor = null;
    this.CallbackUrl = null;
    this.PaymentMethod = null;
    this.Customer = Customer;
    this.Products = [];
    this.Splits = null;
    this.PaymentObject = null;
}

 module.exports = Transaction;