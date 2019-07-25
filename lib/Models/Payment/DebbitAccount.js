
function DebitAccount() {
    this.Id = 0;
    this.BankData = null;
    this.IsRecurring = null;
    this.RecurringDayMonth = null;
    this.DebitId = 0;
    this.DebitCode = null;
    this.DueDate = null;
}

module.exports = {
    DebitAccount: DebitAccount
}

