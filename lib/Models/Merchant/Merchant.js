var BankData = require('../Bank/BankData');
var Address = require('../General/Address');

function Merchant() {
    this.Id = 0;
    this.Name = null;
    this.CommercialName = null;
    this.Identity = null;
    this.ResponsibleName = null;
    this.ResponsibleIdentity = null;
    this.Email = null;
    this.TechName = null;
    this.TechIdentity = null;
    this.TechEmail = null;
    this.Token = null;
    this.SecretKey = null;
    this.TokenSandbox = null;
    this.SecretKeySandbox = null;
    this.BankData = BankData;
    this.Address = Address;
    this.Configuration = null;
    this.MerchantSplit = [];
}

 module.exports = Merchant;