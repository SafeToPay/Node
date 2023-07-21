//Carnê

function Carnet() {
   this.Id = 0;
   this.IdCarnetLot = 0;
   this.Identifier = null;
   this.Reference = null;
   this.IsProcessed = null;
   this.IsAsync = null;
   this.Message = null;
   this.PenaltyAmount = null;
   this.InterestAmount = null;
   this.PayableAfterDue = null;
   this.IsEnablePartialPayment = null;
   this.BankSlips = [];
}

export default Carnet;
