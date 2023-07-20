import path from "../lib/Models/";

import Transfer from path + 'Transference/Transfer.js';
import TransferRegister from path + 'Transference/TransferRegister.js';

import Transaction from path + 'Transaction/Transaction.js';
import TransactionStatus from path + 'Transaction/TransactionStatus.js';
import Splits from path + 'Transaction/Splits.js';

import Subscription from path + 'Subscription/Subscription.js';

import SingleSale from path + 'SingleSale/SingleSale.js';
import SingleSalePayment from path + 'SingleSale/SingleSalePayment.js';
import SingleSalePaymentMethod from path + 'SingleSale/SingleSalePaymentMethod.js';
import SingleSaleProduct from path + 'SingleSale/SingleSaleProduct.js';

import PaymentMethod from path + 'Payment/PaymentMethod.js';
import DebitCard from path + 'Payment/DebitCard.js';
import DebbitAccount from path + 'Payment/DebbitAccount.js';
import CreditCard from path + 'Payment/CreditCard.js';
import Carnet from path + 'Payment/Carnet.js';
import CarnetLot from path + 'Payment/CarnetLot.js';
import CarnetItems from path + 'Payment/CarnetItems.js';
import Bitcoin from path + 'Payment/Bitcoin.js';
import Bankslip from path + 'Payment/Bankslip.js';
import BankTransfer from path + 'Payment/BankTransfer.js';
import Pix from path + 'Payment/Pix.js';

import ListTax from path + 'Merchant/ListTax.js';
import Merchant from path + 'Merchant/Merchant.js';
import MerchantPaymentDate from path + 'Merchant/MerchantPaymentDate.js';
import MerchantPaymentMethod from path + 'Merchant/MerchantPaymentMethod.js';
import MerchantSplit from path + 'Merchant/MerchantSplit.js';
import MerchantSplitTax from path + 'Merchant/MerchantSplitTax.js';
import MerchantType from path + 'Merchant/MerchantType.js';
import Plan from path + 'Merchant/Plan.js';
import PlanFrequence from path + 'Merchant/PlanFrequence.js';
import TaxType from path + 'Merchant/TaxType.js';

import Address from path + 'General/Address.js';
import Customer from path + 'General/Customer.js';
import Product from path + 'General/Product.js';

import Bank from path + 'Bank/Bank.js';
import BankData from path + 'Bank/BankData.js';

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
