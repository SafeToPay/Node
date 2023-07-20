import PlanFrequence from './PlanFrequence.js';


function Plan() {
    this.PlanFrequence  = PlanFrequence;
    this.Name = null;
    this.Description = null;
    this.Amount = null;
    this.SubscriptionTax = null;
    this.SubscriptionLimit = null;
    this.ChargeDay = null;
    this.DaysChurn = null;
    this.DaysChurnAlert = null;
    this.DaysDelayAlert = null;
    this.CallbackUrl = null;
    this.ExpirationDate = null;
    this.DaysDue = null;
}

export default Plan;