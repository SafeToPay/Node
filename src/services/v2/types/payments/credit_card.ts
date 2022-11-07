import { PaymentMethod, TransactionStatus } from "safe2payTypes";
import { PaymentBase } from './common'

export type BaseCreditCardResponse = {
  IdTransaction: number
  Token: string
  Description: string
  Status: TransactionStatus
  Message: string
  CreditCard: {
    CardNumber: NumericalString
    Brand: number
    Installment: number
  }
}

// ========================================== create credit card ==========================================

export type PaymentObjectCreateCreditCard= {
  InstallmentQuantity: number
  IsPreAuthorization: boolean
  IsApplyInterest: boolean
  InterestRate: number
  SoftDescriptor: string
  Holder: string
  CardNumber: NumericalString
  ExpirationDate: `${DateMonthType}/${DateYearType}`
  SecurityCode: NumericalString
  Token: string
}

export type PaymentObjectCreateCreditCardWithToken = Omit<PaymentObjectCreateCreditCard, 'Holder'| 'CardNumber' | 'ExpirationDate' | 'SecurityCode'>
export type PaymentObjectCreateCreditCardWithoutToken = Omit<PaymentObjectCreateCreditCard, 'Token'>

export type CreateCreditCardData<M = Record<string, unknown>> = PaymentBase<M> & {
  ShouldUseAntiFraud: boolean
  VisitorID: string
  PaymentMethod: PaymentMethod.CREDIT_CARD
  PaymentObject: PaymentObjectCreateCreditCardWithToken |PaymentObjectCreateCreditCardWithoutToken
}

export type CreateCreditCardResponse = BaseCreditCardResponse

// ================================================ cancel credit card =================================================

export type CancelCreditCardParams = {
  id: NumericalString
  amount: NumericalString
}

export type CancelCreditCardResponse = true


// ================================================ capture credit card =================================================

export type CaptureCreditCardParams = {
  id: NumericalString
  amount: NumericalString
}

export type CaptureCreditCardResponse = BaseCreditCardResponse
