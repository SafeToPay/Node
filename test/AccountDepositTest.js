const safe2pay = require('../dist/safe2pay');

const AccountDepositRequest = safe2pay.api.AccountDepositRequest;

function DetailTest() {

    var Id = 287891;

    AccountDepositRequest.Detail(Id)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

function ListTest() {
    var CreatedDateInitial = "2019-07-01";
    var CreatedDateEnd = "2019-07-16";
    var PageNumber = 1;
    var RowsPerPage = 10;
    AccountDepositRequest.List(CreatedDateInitial, CreatedDateEnd, PageNumber, RowsPerPage)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

function GetBankAccountTest() {

    AccountDepositRequest.GetBankAccount()
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}


// DetailTest();
// ListTest();
// GetBankAccountTest();