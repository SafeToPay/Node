var TaxType = require('./TaxType');

function MerchantSplitTax(TaxType,Tax) {
    this.TaxTypeName = TaxType;
    this.TaxType = null;
    this.Tax = Tax;
}

 module.exports = MerchantSplitTax;