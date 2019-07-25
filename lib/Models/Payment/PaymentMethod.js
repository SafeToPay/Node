//Formas de pagamento

// Code	Name
// 1	Boleto
// 2	Cartão de Crédito
// 3	Criptomoedas
// 4	Cartão de Débito

function PaymentMethod(vCode) {
    this.Id = 0;
    this.Name = null;
    this.Code = vCode;
}

module.exports = {
    PaymentMethod: PaymentMethod,
}

