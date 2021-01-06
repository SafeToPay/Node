function Splits(vCodeTaxType, vCodeReceiverType, vIdReceiver, vIdentity, vName, vIsPayTax, vAmount) {
    this.CodeTaxType = vCodeTaxType;
    this.CodeReceiverType = vCodeReceiverType;
    this.IdReceiver = vIdReceiver;
    this.Identity = vIdentity;
    this.Name = vName;
    this.IsPayTax = vIsPayTax;
    this.Amount = vAmount;
}

module.exports = Splits;