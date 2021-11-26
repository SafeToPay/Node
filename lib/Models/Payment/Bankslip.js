//Boleto bancário

function BankSlip() {
  this.DueDate = null;
  this.Instruction = null;
  this.Message = null;
  this.PenaltyRate = null;
  this.InterestRate = null;
  this.CancelAfterDue = null;
  this.IsEnablePartialPayment = null;
  this.DaysBeforeCancel = null;
}

module.exports = BankSlip;