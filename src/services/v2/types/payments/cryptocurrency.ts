import {
  CryptocurrencyTypeEnum,
  PaymentMethod,
  TransactionStatus,
} from 'safe2payTypes'
import { PaymentBase } from './common'

export type PaymentObjectCryptocurrency = {
  Symbol: CryptocurrencyTypeEnum
}

export type CryptocurrencyData<M = Record<string, unknown>> = PaymentBase<M> & {
  PaymentMethod: PaymentMethod.CRYPTOCURRENCY
  PaymentObject: PaymentObjectCryptocurrency
}

export type CryptocurrencyResponseBase = {
  IdTransaction: string
  Status: TransactionStatus
  Message: string
  Description: string
  QrCode: string
  Wallet: string
}

export type CryptocurrencyResponseBTC = CryptocurrencyResponseBase & {
  Symbol: CryptocurrencyTypeEnum.BITCOIN
  AmountBTC: number
}

export type CryptocurrencyResponseBCH = CryptocurrencyResponseBase & {
  Symbol: CryptocurrencyTypeEnum.BITCOIN_CASH
  AmountBCH: number
}

export type CryptocurrencyResponseLTC = CryptocurrencyResponseBase & {
  Symbol: CryptocurrencyTypeEnum.LITECOIN
  AmountLTC: number
}

export type CryptocurrencyResponse =
  | CryptocurrencyResponseBTC
  | CryptocurrencyResponseBCH
  | CryptocurrencyResponseLTC
