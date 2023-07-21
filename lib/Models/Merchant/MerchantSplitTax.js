import TaxType from './TaxType.js';


function MerchantSplitTax(TaxType,Tax) {
    this.TaxTypeName = TaxType;
    this.TaxType = null;
    this.Tax = Tax;
}

 export default MerchantSplitTax;