declare module 'safe2payTypes' {
  
  export enum CryptocurrencyTypeEnum {
    BITCOIN = 'BTC',
    BITCOIN_CASH = 'BCH',
    LITECOIN = 'LTC',
  }

  export enum TransactionStatus {
    PENDING = 1,
    PROCESSING = 2,
    APPROVED = 3,
    IN_DISPUTE = 5,
    REFUNDED = 6,
    DOWNLOADED = 7,
    REFUSED = 8,
    RELEASED = 11,
    IN_CANCELLATION = 12,
    CHARGEBACK = 13,
    PRE_AUTHORIZED = 14,
  }

  export enum PaymentMethod {
    BOLETO = 1,
    CREDIT_CARD = 2,
    CRYPTOCURRENCY = 3,
    DEBIT_CARD = 4,
    PIX = 6,
    DEBIT_ACCOUNT = 10,
  }

  export enum CodeTaxTypeEnum {
    PERCENTAGE = 1,
    FIXED = 2,
  }

  export enum CodeReceiverTypeEnum {
    COMPANY = '1',
    SUB_ACCOUNT = '2',
  }

  export enum DiscountTypeEnum {
    FIXED = 1,
    ANTICIPATION_CALENDAR_DAYS = 2,
    ANTICIPATION_WORKING_DAYS = 3,
  }

  export type Address = {
    ZipCode?: NumericalString
    Street?: string
    Number?: NumericalString
    Complement?: string
    District?: string
    CityName?: string
    StateInitials?: string
    CountryName?: string
  }

  export type Customer = {
    Name?: string
    Identity: NumericalString
    Phone?: NumericalString
    Email?: string
    Address?: Address
  }

  export type Product = {
    Code: NumericalString
    Description: string
    UnitPrice: number
    Quantity: number
  }

  export type Products = Product[]

  export type Split = {
    CodeTaxType: CodeTaxTypeEnum
    CodeReceiverType: CodeReceiverTypeEnum
    IdReceiver: number
    Identity: NumericalString
    Name: string
    IsPayTax: boolean
    Amount: number
  }

  export type Splits = Split[]
}
