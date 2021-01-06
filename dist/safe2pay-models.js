//transference

var path = "../lib/Models/";

const Transfer = require(path +'Transference/Transfer');
const TransferRegister = require(path +'Transference/TransferRegister');
//transaction
const Splits = require(path + 'Transaction/Splits')
const Transaction = require(path +'Transaction/Transaction');
const TransactionStatus = require(path +'Transaction/TransactionStatus');
//subscription
const Subscription = require(path +'Subscription/Subscription');
//singlesale
const SingleSale = require(path +'SingleSale/SingleSale');
const SingleSalePayment = require(path +'SingleSale/SingleSalePayment');
const SingleSalePaymentMethod = require(path +'SingleSale/SingleSalePaymentMethod');
const SingleSaleProduct = require(path +'SingleSale/SingleSaleProduct');

//payment
const PaymentMethod = require(path +'Payment/PaymentMethod');
const DebitCard = require(path +'Payment/DebitCard');
const DebbitAccount = require(path +'Payment/DebbitAccount');
const CreditCard = require(path +'Payment/CreditCard');
const Carnet = require(path +'Payment/Carnet');
const CarnetLot = require(path +'Payment/CarnetLot');
const CarnetItems = require(path +'Payment/CarnetItems');
const Bitcoin = require(path +'Payment/Bitcoin');
const Bankslip = require(path +'Payment/Bankslip');
const BankTransfer = require(path +'Payment/BankTransfer');

//merchant
const ListTax = require(path +'Merchant/ListTax');
const Merchant = require(path +'Merchant/Merchant');
const MerchantPaymentDate = require(path +'Merchant/MerchantPaymentDate');
const MerchantPaymentMethod = require(path +'Merchant/MerchantPaymentMethod');
const MerchantSplit = require(path +'Merchant/MerchantSplit');
const MerchantSplitTax = require(path +'Merchant/MerchantSplitTax');
const MerchantType = require(path +'Merchant/MerchantType');
const Plan = require(path +'Merchant/Plan');
const PlanFrequence = require(path +'Merchant/PlanFrequence');
const TaxType = require(path +'Merchant/TaxType');

//general
const Address = require(path +'General/Address');
const Customer = require(path +'General/Customer');
const Product = require(path +'General/Product');

//general
const Bank = require(path +'Bank/Bank');
const BankData = require(path +'Bank/BankData');

module.exports = {
    transference: {
        Transfer,
        TransferRegister
    },
    transaction: {
        Splits,
        Transaction,
        TransactionStatus
    },
    subscription:{
        Subscription
    },
    singlesale: {
        SingleSale,
        SingleSalePayment,
        SingleSalePaymentMethod,
        SingleSaleProduct
    },
    payment: {
        Bankslip,
        CreditCard,
        Bitcoin,
        DebitCard,
        DebbitAccount,
        BankTransfer,
        Carnet,
        CarnetItems,
        CarnetLot,
        PaymentMethod
    },
    merchant: {
        Merchant,
        MerchantPaymentDate,
        MerchantPaymentMethod,
        MerchantSplit,
        MerchantSplitTax,
        MerchantType,
        Plan,
        PlanFrequence,
        TaxType,
        ListTax
    },
    general: {
        Customer,
        Address,
        Product
    },
    bank: {
        Bank,
        BankData
    }
}