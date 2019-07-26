var DebitAccountRequest = require('../Request/DebitAccountRequest');

function GetTest() {
    var Id = 8;

    var response = DebitAccountRequest.Get(Id);

    console.log(response);
}

function CancelTest() {
    var Id = 8;

    var response = DebitAccountRequest.Get(Id);


    console.log(response);
}

GetTest();
CancelTest();