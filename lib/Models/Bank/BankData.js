
var Bank = require('./Bank')
var AccountType = require('./AccountType')

function BankData() {
    this.Bank = Bank;
    this.AccountType = AccountType;
    this.BankAgency = null;
    this.BankAgencyDigit = null;
    this.BankAccount = null;
    this.BankAccountDigit = null;
    this.Operation = null;
}

 module.exports = BankData;
 