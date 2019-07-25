
function ListTest(){
    var PageNumber = 1;
    var RowsPage = 10;  

    List(PageNumber,RowsPage);
};


function GetTest(){

var Id = 80;
Get(Id);

}

function UpdateTest(){

//UPDATE
var plan = new planObj.Plan();
 //Frequencia do plano
 //Code Name
 // 1	Mensal
 // 2	Bimestral
 // 3	Trimestral
 // 4	Semestral
 // 5	Anual
 // 6	Semanal
 // 7	Diário
plan.Id = 81;
plan.PlanFrequence = new planFrequenceObj.PlanFrequence("1");
plan.Name = "Teste"; //Nome do plano
plan.Description = "Integração"; // Descrição do plano
plan.Amount = "10.00"; // Valor do plano
plan.SubscriptionLimit = "200"; // Limite de adesões
plan.DaysTrial = 30; // Período de teste 
plan.DaysToInactive = "2"; // Dias de inadimplência
plan.ChargeDay = "10"; // Dia de cobrança
plan.SubscriptionTax = "20.00"; // Taxa de adesão
plan.IsProRata = true; //Cobrança Pro-Rata
plan.IsEnabled = true;  //Ativado
plan.IsImmediateCharge = false;  //Cobrar imediatamente
plan.CallbackUrl = "https://webhook.site/251107e2-bdb1-480d-934c-bab0eb413318"; // URL de callback para notificação via Webhook
plan.ExpirationDate = "2019-08-10";  //Data de expiração do plano

plan = util.RemoveObjectKeys(plan);

Update(plan);
}

function AddTest(){

//UPDATE
var plan = new planObj.Plan();

 //Frequencia do plano
 //Code Name
 // 1	Mensal
 // 2	Bimestral
 // 3	Trimestral
 // 4	Semestral
 // 5	Anual
 // 6	Semanal
 // 7	Diário
plan.PlanFrequence = new planFrequenceObj.PlanFrequence("1");
plan.Name = "Teste"; //Nome do plano
plan.Description = "Integração"; // Descrição do plano
plan.Amount = "10.00"; // Valor do plano
plan.SubscriptionLimit = "200"; // Limite de adesões
plan.DaysTrial = 30; // Período de teste 
plan.DaysToInactive = "2"; // Dias de inadimplência
plan.ChargeDay = "10"; // Dia de cobrança
plan.SubscriptionTax = "20.00"; // Taxa de adesão
plan.IsProRata = true; //Cobrança Pro-Rata
plan.IsEnabled = true;  //Ativado
plan.IsImmediateCharge = false;  //Cobrar imediatamente
plan.CallbackUrl = "https://webhook.site/251107e2-bdb1-480d-934c-bab0eb413318"; // URL de callback para notificação via Webhook
plan.ExpirationDate = "2019-08-10";  //Data de expiração do plano


plan = util.RemoveObjectKeys(plan);

Add(plan);
}


UpdateTest();


