import Bank from './Bank.js';
import AccountType from './AccountType.js';

function BankData() {
    this.Bank = Bank;
    this.AccountType = AccountType;
    this.BankAgency = null;
    this.BankAgencyDigit = null;
    this.BankAccount = null;
    this.BankAccountDigit = null;
    this.Operation = null;
}

 export default BankData;
 