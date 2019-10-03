const HttpClient = require('../Core/HttpClient').HttpClient;

module.exports = {

    /**
     * Detail a deposit
     *
     * @param [int] $Id
     * @return Response
     */
    GetBankAccount: function () {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', "MerchantBankData/Get", null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * List deposit Register
     *
     * @param [date] $CreatedDateInitial
     * @param [date] $CreatedDateEnd
     * @param [int] $PageNumber
     * @param [int] $RowsPerPage
     * @return Response
     */
    List: function (month, year) {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', `CheckingAccount/GetListDeposits?month=${month}&year=${year}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    },

    /**
     * Detail a deposit
     *
     * @param [int] $Id
     * @return Response
     */
    DetailList: function (day,month,year,page,rowsPerPage) {

        return new Promise(function (resolve,reject) {
            HttpClient('GET', `CheckingAccount/GetListDetailsDeposits?day=${day}&month=${month}&year=${year}&page=${page}&rowsPerPage=${rowsPerPage}`, null, false).then(function (result) {
                resolve(result);
            }).catch(function (rej) {
                resolve(rej);
            });
        });
    }
}