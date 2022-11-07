import { DiscountTypeEnum, PaymentMethod, TransactionStatus } from "safe2payTypes";
import { PaymentBase } from "./common";


// ====================================== base boleto   =======================================
export type BaseBoletoResponse = {
  IdTransaction: number;
  Status: TransactionStatus;
  Message: string;
  Description: string;
  BankSlipNumber: NumericalString;
  DueDate: `${DateDayType}/${DateMonthType}/${DateYearType}`;
  DigitableLine: NumericalString;
  Barcode: NumericalString;
  BankSlipUrl: string;
  OperationDate: `${DateDayType}/${DateMonthType}/${DateYearType}`;
  BankName: string;
  CodeBank: NumericalString;
  Wallet: string;
  WalletDescription: string;
  Agency: NumericalString;
  Account: NumericalString;
  CodeAssignor: NumericalString;
  AgencyDV: NumericalString;
  AccountDV: NumericalString;
  DocType: string;
  Accept: string;
  Currency: string;
  GuarantorName: string;
  GuarantorIdentity: NumericalString;
}

// ====================================== create boleto ======================================
export type PaymentObjectCreateBoleto = BaseBoletoResponse

export type CreateBoletoData<M = Record<string, unknown>> = PaymentBase<M> & {
  PaymentMethod: PaymentMethod.BOLETO;
  PaymentObject: PaymentObjectCreateBoleto;
};

export type CreateBoletoResponse = {
  IdTransaction: number;
  Status: TransactionStatus;
  Message: string;
  Description: string;
  BankSlipNumber: NumericalString;
  DueDate: `${DateDayType}/${DateMonthType}/${DateYearType}`;
  DigitableLine: NumericalString;
  Barcode: NumericalString;
  BankSlipUrl: string;
  OperationDate: `${DateDayType}/${DateMonthType}/${DateYearType}`;
  BankName: string;
  CodeBank: NumericalString;
  Wallet: string;
  WalletDescription: string;
  Agency: NumericalString;
  Account: NumericalString;
  CodeAssignor: NumericalString;
  AgencyDV: NumericalString;
  AccountDV: NumericalString;
  DocType: string;
  Accept: string;
  Currency: string;
  GuarantorName: string;
  GuarantorIdentity: NumericalString;
};

// ====================================== release boleto ======================================

export type ReleaseBoletoParams = {
  idTransaction: NumericalString;
};

export type ReleaseBoletoResponse = true;

// ====================================== change boleto ======================================

export enum ChangeBoletoCommand {
  DUE_DATE = 1,
  DISCOUNT_PAYMENT = 2,
  CANCEL_DISCOUNT_PAYMENT = 3,
  DISCOUNT_AMOUNT = 4,
  CANCEL_DISCOUNT_AMOUNT = 5,
}

export type PaymentObjectChangeBoletoBase = {
  Command: ChangeBoletoCommand;
  DueDate: `${DateDayType}/${DateMonthType}/${DateYearType}`;
  DiscountPayment: number;
  DiscountDue: `${DateDayType}/${DateMonthType}/${DateYearType}`;
  DiscountAmount: number;
};

export type PaymentObjectChangeBoletoDueDate = Pick<PaymentObjectChangeBoletoBase, "Command" | "DueDate"> & {
  Command: ChangeBoletoCommand.DUE_DATE;
};

export type PaymentObjectChangeBoletoDiscountPayment = Pick<PaymentObjectChangeBoletoBase, "Command" | "DiscountPayment"> & {
  Command: ChangeBoletoCommand.DISCOUNT_PAYMENT;
};

export type PaymentObjectChangeBoletoCancelDiscountPayment = Pick<PaymentObjectChangeBoletoBase, "Command"> & {
  Command: ChangeBoletoCommand.CANCEL_DISCOUNT_PAYMENT;
};

export type PaymentObjectChangeBoletoDiscountAmount = Pick<PaymentObjectChangeBoletoBase, "Command" | "DiscountAmount" | "DiscountDue"> & {
  Command: ChangeBoletoCommand.DISCOUNT_AMOUNT;
};

export type PaymentObjectChangeBoletoCancelDiscountAmount = Pick<PaymentObjectChangeBoletoBase, "Command"> & {
  Command: ChangeBoletoCommand.CANCEL_DISCOUNT_AMOUNT;
};

export type PaymentObjectChangeBoleto =
    PaymentObjectChangeBoletoDueDate |
    PaymentObjectChangeBoletoDiscountPayment |
    PaymentObjectChangeBoletoCancelDiscountPayment |
    PaymentObjectChangeBoletoDiscountAmount |
    PaymentObjectChangeBoletoCancelDiscountAmount;

export type ChangeBoletoData = {
  Id: number;
  PaymentMethod: PaymentMethod.BOLETO;
  PaymentObject: PaymentObjectChangeBoleto;
};

export type ChangeBoletoResponse = BaseBoletoResponse


// ====================================== cancel boleto ======================================

export type CancelBoletoParams = {
  idTransaction: NumericalString;
}

export type CancelBoletoResponse = true;
