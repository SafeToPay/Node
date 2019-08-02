
var Bank = require('./Bank')

function BankData() {
    this.Bank = Bank;
    this.BankAgency = null;
    this.BankAgencyDigit = null;
    this.BankAccount = null;
    this.BankAccountDigit = null;
    this.Operation = null;
}

 module.exports = BankData;
 