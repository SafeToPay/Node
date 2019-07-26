
module.exports = class Product {
    Code;
    Description;
    UnitPrice;
    Quantity;

    constructor(Code, Description,UnitPrice,Quantity) {
        this.Code = Code;
        this.Description = Description;
        this.UnitPrice = UnitPrice;
        this.Quantity = Quantity;
      }
}