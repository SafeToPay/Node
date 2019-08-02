//Boleto bancário

function BankSlip() {
  this.Id = 0;
  this.IdCarnet = 0;
  this.IdTransaction = 0;
  this.SeedNumber = null;
  this.BankSlipNumber = null;
  this.DigitableLine = null;
  this.Barcode = null;
  this.File = null;
  this.Amount = 0;
  this.AmountPayment = null;
  this.DueDate = null;
  this.Instruction = null;
  this.Message = null;
  this.PenaltyRate = null;
  this.InterestRate = null;
  this.BankSplipUrl = null;
  this.CancelAfterDue = null;
  this.IsEnablePartialPayment = null;
  this.DaysBeforeCancel = null;
  this.IdMerchant = null;

}

module.exports = BankSlip;