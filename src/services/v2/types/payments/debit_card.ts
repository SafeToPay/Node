
import { PaymentMethod, TransactionStatus } from "safe2payTypes";
import { PaymentBase } from './common'

export type PaymentObjectDebitCard = {
  SoftDescriptor: string
  Holder: string
  CardNumber: NumericalString
  ExpirationDate: `${DateMonthType}/${DateYearType}`
  SecurityCode: NumericalString
  ReturnUrl: string
}

export type DebitCardData<M = Record<string, unknown>> = PaymentBase<M> & {
  PaymentMethod: PaymentMethod.DEBIT_CARD
  PaymentObject: PaymentObjectDebitCard
}

export type DebitCardResponse = {
  IdTransaction: number
  Token: string
  Description: string
  Status: TransactionStatus
  Message: string
  AuthenticationUrl: string
  CreditCard: {
    CardNumber: NumericalString
    Brand: number
  }
}
