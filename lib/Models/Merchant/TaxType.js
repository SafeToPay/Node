//Tipo de taxa

// Code	Name
// 1	Percentual
// 2	Valor

function TaxType(vCode) {
    this.Id = 0;
    this.Name = null;
    this.Code = vCode;
}

module.exports = {
    TaxType: TaxType,
}

