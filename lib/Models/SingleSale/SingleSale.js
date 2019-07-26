var Merchant = require('../Merchant/Merchant');
var Customer = require('../General/Customer');


module.exports = class SingleSale {
    Merchant = Merchant;
    Customer = Customer;
    IdTransaction = 0;
    SingleSaleHash = null;
    Reference = null;
    CallbackUrl = null;
    SingleSaleUrl = null;
    BankSplipUrl = null;
    DueDate = null;
    ExpirationDate = null;
    CreatedDate = null;
    Amount = null;
    DiscountAmount = null;
    PenaltyAmount = null;
    InterestAmount = null;
    Emails = [];
    Messages = [];
    Instruction = null;
    IsExcluded = null;
    Payment = null;
    Products = [];
    PaymentMethods = [];
    IdSubscription = 0;
}
