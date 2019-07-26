var AccountDepositRequest = require('../Request/AccountDepositRequest');


function DetailTest() {

    var Id = 287891;

    var response = AccountDepositRequest.Detail(Id);

    console.log(response);
}

function ListTest() {
    var CreatedDateInitial = "2019-07-01";
    var CreatedDateEnd = "2019-07-16";
    var PageNumber = 1;
    var RowsPerPage = 10;
    var response = AccountDepositRequest.List(CreatedDateInitial, CreatedDateEnd, PageNumber, RowsPerPage);

    console.log(response);
}

function GetBankAccountTest() {

    var response = AccountDepositRequest.GetBankAccount();

    console.log(response);
}


DetailTest();
ListTest();
GetBankAccountTest();