
var BankData = require('../Bank/BankData');

module.exports = class DebitAccount {
    Id = 0;
    BankData = BankData;
    IsRecurring = null;
    RecurringDayMonth = null;
    DebitId = 0;
    DebitCode = null;
    DueDate = null;
}