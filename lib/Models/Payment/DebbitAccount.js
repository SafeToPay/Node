
import BankData from '../Bank/BankData.js';


function DebitAccount() {
    this.Id = 0;
    this.BankData = BankData;
    this.IsRecurring = null;
    this.RecurringDayMonth = null;
    this.DebitId = 0;
    this.DebitCode = null;
    this.DueDate = null;
}

 export default DebitAccount;