var client = require('../Core/HttpClient');
var util = require('../Core/Util');

var BankDataObj = require('../Models/Bank/BankData');
var BankObj = require('../Models/Bank/Bank');
var ProductObj = require('../Models/General/Product');
var AddressObj = require('../Models/General/Address');
var MerchantObj = require('../Models/Merchant/Merchant');
var MerchantSplitObj = require('../Models/Merchant/MerchantSplit');
var MerchantSplitTaxObj = require('../Models/Merchant/MerchantSplitTax');
/**
 * Merchant List
 *
 * @param [PageNumber] $PageNumber
 * @param [RowsPage] $RowsPage
 * @return Response
 */
function List(PageNumber,RowsPage) {

    client.HttpClient('GET', "v2/Marketplace/List?PageNumber=" +PageNumber+"&RowsPerPage="+RowsPage, null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * Get Merchant
 *
 * @param [int] $Id
 * @return Response
 */
function Get(Id) {

    client.HttpClient('GET', "v2/Marketplace/Get?id=" +Id, null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}

/**
 * Delete Merchant
 *
 * @param [int] $Id
 * @return Response
 */
function Delete(Id) {

    client.HttpClient('DELETE', "v2/Marketplace/Delete?id="+Id, null, false).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * Add Merchant
 *
 * @param [Merchant] $merchant
 * @return Response
 */
function Add(merchant) {

    client.HttpClient('POST', "v2/Marketplace/Add", merchant, false).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}

/**
 * Update Merchant
 *
 * @param [Merchant] $merchant
 * @param [int] $Id
 * @return Response
 */
function Update(merchant,Id) {

    client.HttpClient('PUT', "/v2/Marketplace/Update?id="+ Id, merchant, false).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });

}



function AddTest()
{

     //Dados do endereço do cliente
     var address = new AddressObj.Address();
     address.ZipCode = "90670090";
     address.Street = "Logradouro";
     address.Complement = "Complemento";
     address.Number = "123";
     address.District = "Higienopolis";
     address.StateInitials = "RS";
     address.CityName = "Porto Alegre";
     address.CountryName = "Brasil";

     var bankData = BankDataObj.BankData();
     bankData.Bank = new BankObj.Bank("041");
     bankData.BankAgency = "1676";
     bankData.BankAgencyDigit = "0";
     bankData.BankAccount = "41776";
     bankData.BankAccountDigit = "7";
     bankData.Operation = "3";

    var split = new MerchantSplitObj.MerchantSplit();
    split.IsSubaccountTaxPayer = false;
    split.PaymentMethodCode = "1";
    split.Taxes = new merchantSplit.push(
        new MerchantSplitTaxObj.MerchantSplitTax("1","1.00"),
        new MerchantSplitTaxObj.MerchantSplitTax("1","1.75"),
        new MerchantSplitTaxObj.MerchantSplitTax("1","1.50"),
    );

    var merchant = new MerchantObj.Merchant();

    merchant.Identity = "53797700000115";
    merchant.Name = "Francisco e Laís Filmagens ME";
    merchant.CommercialName = "Teste";
    merchant.Email = "4ba9b029f@hotmail.com";
    merchant.ResponsibleName = "Responsável";
    merchant.ResponsibleIdentity = "04270435062";

    merchant.TechEmail= "Teste12@teste.com";
    merchant.TechName = "Responsável técnico";
    merchant.TechIdentity = "32001774117";

    merchant.BankData = bankData;

    merchant.MerchantSplit = split;

    merchant.Address = address;

    Add(merchant);
}

function UpdateTest()
{
   
     //Dados do endereço do cliente
     var address = new AddressObj.Address();
     address.ZipCode = "90670090";
     address.Street = "Logradouro";
     address.Complement = "Complemento";
     address.Number = "123";
     address.District = "Higienopolis";
     address.StateInitials = "RS";
     address.CityName = "Porto Alegre";
     address.CountryName = "Brasil";

     var bankData = BankDataObj.BankData();
     bankData.Bank = new BankObj.Bank("041");
     bankData.BankAgency = "1676";
     bankData.BankAgencyDigit = "0";
     bankData.BankAccount = "41776";
     bankData.BankAccountDigit = "7";
     bankData.Operation = "3";

    var split = new MerchantSplitObj.MerchantSplit();
    split.IsSubaccountTaxPayer = false;
    split.PaymentMethodCode = "1";
    split.Taxes = new merchantSplit.push(
        new MerchantSplitTaxObj.MerchantSplitTax("1","1.00"),
        new MerchantSplitTaxObj.MerchantSplitTax("1","1.75"),
        new MerchantSplitTaxObj.MerchantSplitTax("1","1.50"),
    );

    var merchant = new MerchantObj.Merchant();

    merchant.Identity = "53797700000115";
    merchant.Name = "Francisco e Laís Filmagens ME";
    merchant.CommercialName = "Teste";
    merchant.Email = "4ba9b029f@hotmail.com";
    merchant.ResponsibleName = "Responsável";
    merchant.ResponsibleIdentity = "04270435062";

    merchant.TechEmail= "Teste12@teste.com";
    merchant.TechName = "Responsável técnico";
    merchant.TechIdentity = "32001774117";

    merchant.BankData = bankData;

    merchant.MerchantSplit = split;

    merchant.Address = address;

    Update(merchant, 783);
}

function DeleteTest()
{
    var Id = 717;
    Delete(Id);
}

function ListTest()
{
    var PageNumber = 1;
    var RowsPage = 10;

    List(PageNumber,RowsPage);
}

function GetTest()
{
    var Id = 717;
    Get(Id);
}


//ListTest();
//GetTest();
//DeleteTest();
//AddTest();
//Update();