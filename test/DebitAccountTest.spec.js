const safe2pay = require('../dist/safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

const DebitAccountRequest = safe2pay.api.DebitAccountRequest;

function GetTest() {

    var Id = 8;

    DebitAccountRequest.Get(Id)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

function CancelTest() {
    var Id = 8;

    DebitAccountRequest.Cancel(Id)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

// GetTest();
// CancelTest();