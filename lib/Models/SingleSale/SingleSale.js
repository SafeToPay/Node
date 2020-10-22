var Merchant = require('../Merchant/Merchant');
var Customer = require('../General/Customer');

function SingleSale() {
    this.Merchant = Merchant;
    this.Customer = Customer;
    this.IdTransaction = 0;
    this.SingleSaleHash = null;
    this.Reference = null;
    this.CallbackUrl = null;
    this.SingleSaleUrl = null;
    this.BankSplipUrl = null;
    this.DueDate = null;
    this.ExpirationDate = null;
    this.CreatedDate = null;
    this.Amount = null;
    this.DiscountAmount = null;
    this.PenaltyAmount = null;
    this.InterestAmount = null;
    this.Emails = [];
    this.Messages = [];
    this.Instruction = null;
    this.IsExcluded = null;
    this.Payment = null;
    this.Products = [];
    this.PaymentMethods = [];
    this.IdSubscription = 0;
}

 module.exports = SingleSale;