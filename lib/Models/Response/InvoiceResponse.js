function InvoiceResponse() {
    this.Id = 0;
    this.Merchant = null;
    this.Customer = null;
    this.IdTransaction = 0;
    this.Status = null;
    this.SingleSaleHash = null;
    this.Reference = null;
    this.BankSplipUrl = null;
    this.DueDate = null;
    this.ExpirationDate = null;
    this.CreatedDate = null;
    this.DiscountAmount = null;
    this.PenaltyAmount = null;
    this.InterestAmount = null;
    this.Emails = null;
    this.Messages = null;
    this.Instruction = null;
    this.IsExcluded = null;
    this.TransactionStatus = null;
    this.Products = null;
    this.PaymentMethods = null;
    this.ApiVersion = null;
    this.IdSubscription = 0;
}

 module.exports = InvoiceResponse;