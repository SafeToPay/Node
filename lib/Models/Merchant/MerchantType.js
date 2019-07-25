//Tipo de comerciante

// Code	Name
// 1	Personal
// 2	Business
// 3	Marketplace
// 4	WhiteLabel

function MerchantType(vCode) {
    this.Id = 0;
    this.Name = null;
    this.Code = vCode;
}

module.exports = {
    MerchantType: MerchantType,
}

