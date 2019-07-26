
var Customer = require('../General/Customer');


module.exports = class Transaction {
    Id = 0;
    IdTransaction = 0;
    IsSandbox = true;
    Application = null;
    Reference = null;
    Vendor = null;
    CallbackUrl = null;
    PaymentMethod = null;
    Customer = Customer;
    Products = [];
    Splits = null;
    PaymentObject = null;
}