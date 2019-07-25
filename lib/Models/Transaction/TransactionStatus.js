// Code	Name
// 1	Pendente
// 2	Processamento
// 3	Autorizado
// 4	Disponível
// 5	Em disputa
// 6	Devolvido
// 7	Baixado
// 8	Recusado
// 11	Liberado
// 12	Em Cancelamento

function TransactionStatus(vCode) {
    this.Id = 0;
    this.Name = null;
    this.Code = vCode;
}

module.exports = {
    TransactionStatus: TransactionStatus,
}