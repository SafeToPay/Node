
var PlanFrequence = require('../Merchant/PlanFrequence');


module.exports = class Plan {
   Id = 0;
   PlanFrequence = PlanFrequence;
   Name = null;
   Description = null;
   Amount = null;
   SubscriptionLimit = null;
   DaysTrial = null;
   DaysToInactive = null;
   ChargeDay = null;
   SubscriptionTax = null;
   IsProRata = null;
   IsEnabled = null;
   IsImmediateCharge = null;
   CallbackUrl = null;
   ExpirationDate = null;
 }