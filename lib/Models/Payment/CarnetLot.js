
//Carnê lote

function CarnetLot() {
    this.Id = 0;
    this.IdMerchant = 0;
    this.Merchant = null;
    this.JsonGzip = null;
    this.CallbackUrl = null;
    this.IsProcessed = null;
    this.CreatedDate = null;
    this.Items = [];
    this.Carnets = null;
    this.ApiVersion = null;
}

module.exports = {
    CarnetLot: CarnetLot
}

