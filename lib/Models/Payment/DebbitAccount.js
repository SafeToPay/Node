
var BankData = require('../Bank/BankData');

function DebitAccount() {
    this.Id = 0;
    this.BankData = BankData;
    this.IsRecurring = null;
    this.RecurringDayMonth = null;
    this.DebitId = 0;
    this.DebitCode = null;
    this.DueDate = null;
}

 module.exports = DebitAccount;