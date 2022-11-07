import { utils } from '../../repository/safe2pay'
import { Safe2PayApi } from '../../repository/safe2pay/api'
import { Safe2PayPayment } from '../../repository/safe2pay/payment'

const { parser: responseParser } = utils

export enum TransactionPath {
  CONSULT_PAYMENT_OPTIONS = '/MerchantPaymentMethod/List',
  CONSULT_INSTALLMENT_VALUES = '/CreditCard/InstallmentValue/',
  CHANGE_BOLETO = '/Payment',
}

// ------------------------------

export type PaymentOptions = {
  PaymentMethod: {
    Code: NumericalString
    Name: string
  }
  IsEnabled: boolean
  InstallmentLimit: number
  MinorInstallmentAmount: number
  IsInstallmentEnable: boolean
}

export type ConsultPaymentOptionsResponse = PaymentOptions[]

// ------------------------------

export type Installment = {
  Installments: number
  InstallmentValue: number
  TotalValue: number
  AppliedTax: number
}

export type ConsultInstallmentValuesParams = {
  amount: NumericalString
}

export type ConsultInstallmentValuesResponse = {
  Installments: Installment[]
}

// ------------------------------

export type ChangeBoletoData = {}
export type ChangeBoletoResponse = {}

// ------------------------------

export async function consultPaymentOptions(api: Safe2PayApi) {
  return responseParser<ConsultPaymentOptionsResponse>(
    await api.get(TransactionPath.CONSULT_PAYMENT_OPTIONS),
  )
}

export async function consultInstallmentValues(
  api: Safe2PayApi,
  params: ConsultInstallmentValuesParams,
) {
  return responseParser<ConsultInstallmentValuesResponse>(
    await api.get(TransactionPath.CONSULT_INSTALLMENT_VALUES, params),
  )
}


export function createAccountDepositRequestService(
  payment: Safe2PayPayment,
  api: Safe2PayApi,
) {
  return {
    consultPaymentOptions: consultPaymentOptions.bind(null, api),
    consultInstallmentValues: consultInstallmentValues.bind(null, api),
  }
}
