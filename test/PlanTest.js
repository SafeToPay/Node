const safe2pay = require('../dist/safe2pay');
const enviroment = safe2pay.enviroment.setApiKey('x-api-key');

const PlanRequest = safe2pay.api.PlanRequest;
var Plan = safe2pay.model.merchant.Plan;
var PlanFrequence = safe2pay.model.merchant.PlanFrequence;


function ListTest() {
    var PageNumber = 1;
    var RowsPage = 10;

    PlanRequest.List(PageNumber, RowsPage)
        .then().then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
};

function GetTest() {

    var Id = 149;
    PlanRequest.Get(Id)
        .then().then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

function UpdateTest() {

    //UPDATE
    var plan = new Plan();
    //Frequencia do plano
    //Code Name
    // 1	Mensal
    // 2	Bimestral
    // 3	Trimestral
    // 4	Semestral
    // 5	Anual
    // 6	Semanal
    // 7	Diário
    plan.Id = 149;
    plan.PlanFrequence = new PlanFrequence();
    plan.PlanFrequence.Code = "1";

    plan.Name = "Teste"; //Nome do plano
    plan.Description = "Integração"; // Descrição do plano
    plan.Amount = "10.00"; // Valor do plano
    plan.SubscriptionLimit = "200"; // Limite de adesões
    plan.DaysTrial = 30; // Período de teste 
    plan.DaysToInactive = "2"; // Dias de inadimplência
    plan.ChargeDay = "10"; // Dia de cobrança
    plan.SubscriptionTax = "20.00"; // Taxa de adesão
    plan.IsProRata = true; //Cobrança Pro-Rata
    plan.IsEnabled = true; //Ativado
    plan.IsImmediateCharge = false; //Cobrar imediatamente
    plan.CallbackUrl = "https://webhook.site/251107e2-bdb1-480d-934c-bab0eb413318"; // URL de callback para notificação via Webhook
    plan.ExpirationDate = "2019-08-10"; //Data de expiração do plano


    PlanRequest.Update(plan)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

function AddTest() {


    //UPDATE
    var plan = new Plan();
    //Frequencia do plano
    //Code Name
    // 1	Mensal
    // 2	Bimestral
    // 3	Trimestral
    // 4	Semestral
    // 5	Anual
    // 6	Semanal
    // 7	Diário
    plan.PlanFrequence = new PlanFrequence();
    plan.PlanFrequence.Code = "1";

    plan.Name = "Teste"; //Nome do plano
    plan.Description = "Integração"; // Descrição do plano
    plan.Amount = "10.00"; // Valor do plano
    plan.SubscriptionLimit = "200"; // Limite de adesões
    plan.DaysTrial = 30; // Período de teste 
    plan.DaysToInactive = "2"; // Dias de inadimplência
    plan.ChargeDay = "10"; // Dia de cobrança
    plan.SubscriptionTax = "20.00"; // Taxa de adesão
    plan.IsProRata = true; //Cobrança Pro-Rata
    plan.IsEnabled = true; //Ativado
    plan.IsImmediateCharge = false; //Cobrar imediatamente
    plan.CallbackUrl = "https://webhook.site/251107e2-bdb1-480d-934c-bab0eb413318"; // URL de callback para notificação via Webhook
    plan.ExpirationDate = "2019-08-10"; //Data de expiração do plano


    PlanRequest.Add(plan)
        .then(function (result) {

            console.log(result);

        }, function (err) {

            console.log(err);

        });
}

// ListTest();
// GetTest();
// UpdateTest();
// AddTest();