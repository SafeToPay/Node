var BankData = require('../Bank/BankData');
var Address = require('../General/Address');

module.exports = class Merchant {
    Id = 0;
    Name = null;
    CommercialName = null;
    Identity = null;
    ResponsibleName = null;
    ResponsibleIdentity = null;
    Email = null;
    TechName = null;
    TechIdentity = null;
    TechEmail = null;
    Token = null;
    SecretKey = null;
    TokenSandbox = null;
    SecretKeySandbox = null;
    BankData = BankData;
    Address = Address;
    Configuration = null;
    MerchantSplit = null;
    CommercialName = null;
}