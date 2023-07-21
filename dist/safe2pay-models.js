const path = "../lib/Models/";

import Transfer from '../lib/Models/Transference/Transfer.js';
import TransferRegister from '../lib/Models/Transference/TransferRegister.js';

import Transaction from '../lib/Models/Transaction/Transaction.js';
import TransactionStatus from '../lib/Models/Transaction/TransactionStatus.js';
import Splits from '../lib/Models/Transaction/Splits.js';

import Subscription from '../lib/Models/Subscription/Subscription.js';

import SingleSale from '../lib/Models/SingleSale/SingleSale.js';
import SingleSalePayment from '../lib/Models/SingleSale/SingleSalePayment.js';
import SingleSalePaymentMethod from '../lib/Models/SingleSale/SingleSalePaymentMethod.js';
import SingleSaleProduct from '../lib/Models/SingleSale/SingleSaleProduct.js';

import PaymentMethod from '../lib/Models/Payment/PaymentMethod.js';
import DebitCard from '../lib/Models/Payment/DebitCard.js';
import DebbitAccount from '../lib/Models/Payment/DebbitAccount.js';
import CreditCard from '../lib/Models/Payment/CreditCard.js';
import Carnet from '../lib/Models/Payment/Carnet.js';
import CarnetLot from '../lib/Models/Payment/CarnetLot.js';
import CarnetItems from '../lib/Models/Payment/CarnetItems.js';
import Bitcoin from '../lib/Models/Payment/Bitcoin.js';
import Bankslip from '../lib/Models/Payment/Bankslip.js';
import BankTransfer from '../lib/Models/Payment/BankTransfer.js';
import Pix from '../lib/Models/Payment/Pix.js';

import ListTax from '../lib/Models/Merchant/ListTax.js';
import Merchant from '../lib/Models/Merchant/Merchant.js';
import MerchantPaymentDate from '../lib/Models/Merchant/MerchantPaymentDate.js';
import MerchantPaymentMethod from '../lib/Models/Merchant/MerchantPaymentMethod.js';
import MerchantSplit from '../lib/Models/Merchant/MerchantSplit.js';
import MerchantSplitTax from '../lib/Models/Merchant/MerchantSplitTax.js';
import MerchantType from '../lib/Models/Merchant/MerchantType.js';
import Plan from '../lib/Models/Merchant/Plan.js';
import PlanFrequence from '../lib/Models/Merchant/PlanFrequence.js';
import TaxType from '../lib/Models/Merchant/TaxType.js';

import Address from '../lib/Models/General/Address.js';
import Customer from '../lib/Models/General/Customer.js';
import Product from '../lib/Models/General/Product.js';

import Bank from '../lib/Models/Bank/Bank.js';
import BankData from '../lib/Models/Bank/BankData.js';

export const transference = {
    Transfer,
    TransferRegister
};

export const transaction = {
    Splits,
    Transaction,
    TransactionStatus
};

export const subscription = {
    Subscription
};

export const singlesale = {
    SingleSale,
    SingleSalePayment,
    SingleSalePaymentMethod,
    SingleSaleProduct
};

export const payment = {
    Bankslip,
    CreditCard,
    Bitcoin,
    DebitCard,
    DebbitAccount,
    BankTransfer,
    Carnet,
    CarnetItems,
    CarnetLot,
    PaymentMethod,
    Pix
};

export const merchant = {
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
};

export const general = {
    Customer,
    Address,
    Product
};

export const bank = {
    Bank,
    BankData
};
