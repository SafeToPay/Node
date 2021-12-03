
var Customer = require('../General/Customer');
var Splits = require('../Transaction/Splits');


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
    this.Splits = [];
    this.PaymentObject = null;
    this.ShouldUseAntiFraud = null;
    this.VisitorID = null;
}

 module.exports = Transaction;