

function MerchantSplit() {
    this.Id = 0;
    this.IdMerchantPaymentMethod = 0;
    this.InitialInstallment = null;
    this.EndInstallment = null;
    this.Amount = null;
    this.TaxType = null;
}

module.exports = {
    MerchantSplit: MerchantSplit,
}

