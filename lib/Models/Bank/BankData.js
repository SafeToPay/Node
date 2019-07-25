
function BankData(vBank,vBankAgency,vBankAgencyDigit,vBankAccount,vBankAccountDigit,vOperation) {
    this.Bank = vBank;
    this.BankAgency = vBankAgency;
    this.BankAgencyDigit = vBankAgencyDigit;
    this.BankAccount = vBankAccount;
    this.BankAccountDigit = vBankAccountDigit;
    this.Operation = vOperation;
}

module.exports = {

    BankData: BankData
    
}