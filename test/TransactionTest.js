const safe2pay = require('../dist/safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');


var TransactionRequest = safe2pay.api.TransactionRequest;

function test() {

    var Id = 852920;

    TransactionRequest.Get(Id)
        .then(function (result) {

            console.log(result);

        }).catch(function(error) {    

            console.log(error);

          });
}

 //test();