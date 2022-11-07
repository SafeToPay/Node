import { PaymentMethod, TransactionStatus } from 'safe2payTypes'
import { PaymentBase } from './common'

// ====================================== dynamic pix ======================================

export type PaymentObjectDynamicPix = {
  Expiration: Seconds // default 86400 # 24h
}

export type DynamicPixData<M = Record<string, unknown>> = PaymentBase<M> & {
  PaymentMethod: PaymentMethod.PIX
  PaymentObject: PaymentObjectDynamicPix
}

export type DynamicPixResponse = {
  IdTransaction: NumericalString
  Status: TransactionStatus
  Message: string
  Description: string
  QrCode: string
  Key: string
}

// ====================================== static pix ======================================

export type StaticPixData = {
  Amount: number
  Description: string
  Reference: string
  CallbackUrl: string
}

export type StaticPixResponse = {
  Id: number
  Identifier: string
  QrCode: string
  Key: string
}

// ====================================== cancel pix ======================================
export type CancelPixParams = {
  id: NumericalString
}

export type CancelPixResponse = true
