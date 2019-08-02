const safe2pay = require('../dist/safe2pay');

var TransactionRequest = safe2pay.api.TransactionRequest;

function test() {

    var Id = 848906;

    TransactionRequest.Get(Id)
        .then(function (result) {

            console.log(result);

        }).catch(function(error) {    

            console.log(error);

          });
}

// test();