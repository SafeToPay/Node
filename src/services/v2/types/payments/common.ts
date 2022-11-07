import { Customer, PaymentMethod, Products, Splits } from 'safe2payTypes'

export type PaymentBase<M = Record<string, unknown>> = {
  IsSandbox: boolean
  IpAddress?: string
  Application?: string
  Vendor?: string
  CallbackUrl: string
  Reference: string
  PaymentMethod: PaymentMethod
  Meta?: M
  PaymentObject: unknown
  Customer: Customer
  Products: Products
  Splits: Splits
}
