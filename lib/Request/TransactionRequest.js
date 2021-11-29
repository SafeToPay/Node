const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Get transaction register
     *
     * @param [int] $Id
     * @return Response
     */
    Get: function (Id) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `transaction/Get?Id=${Id}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

       /**
     * Get transaction register by reference
     *
     * @param [string] $Id
     * @return Response
     */
    GetByReference: function (reference) {

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `transaction/Reference?reference=${reference}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    GetList: function (PageNumber, RowsPerPage, IsSandbox, CreatedDateInitial = null, CreatedDateEnd = null, PaymentDateInitial = null,
                      PaymentDateEnd = null, AmountInitial = 0.00, AmountEnd = 0.00, Idtransaction = 0, Reference = null, Application = null,
                      Vendor = null, CustomerName = null, CustomerIdentity = null, Paymentmethod = null, transactionStatus = null){

        var params = `PageNumber=${PageNumber}&RowsPerPage=${RowsPerPage}&Object.IsSandbox=${IsSandbox}`;

        if(CreatedDateInitial != null && CreatedDateEnd != null)
        params += `&CreatedDateInitial${CreatedDateInitial}&CreatedDateEnd=${CreatedDateEnd}`;

        if(PaymentDateInitial != null && PaymentDateEnd != null)
        params += `&PaymentDateInitial${PaymentDateInitial}&PaymentDateEnd=${CreatedDateEnd}`;

        if(AmountInitial != 0.00 && AmountEnd != 0.00)
        params += `&AmountInitial${AmountInitial}&AmountEnd=${AmountEnd}`;

        if(Idtransaction != 0.00)
        params += `&Object.Id${Idtransaction}`;

        if(Reference != null)
        params += `&Object.Reference${Reference}`;
        
        if(Application != null)
        params += `&Object.Application${Application}`;

        if(Vendor != null)
        params += `&Object.Vendor${Vendor}`;

        if(CustomerName != null)
        params += `&Object.Customer.Name${CustomerName}`;

        if(CustomerIdentity != null)
        params += `&Object.Customer.Identity${CustomerIdentity}`;

        if(Paymentmethod != null)
        params += `&Object.PaymentMethod.Code${Paymentmethod}`;

        if(transactionStatus != null)
        params += `&Object.TransactionStatus.Code${transactionStatus}`;

        return new Promise(function (resolve, reject) {
            HttpClient('GET', `Transaction/List?${params}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}
