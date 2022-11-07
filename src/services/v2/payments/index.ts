export * from '../types/types'
export * from '../constants/constants'

import { utils } from '../../../repository/safe2pay'
import { Safe2PayApi } from '../../../repository/safe2pay/api'
import { Safe2PayPayment } from '../../../repository/safe2pay/payment'

import { PaymentsPath } from '../constants/constants'
import {
  DebitCardData,
  DebitCardResponse,
  CryptocurrencyData,
  CryptocurrencyResponse,
} from '../types/types'

const { parser: responseParser } = utils

export async function debitCard(payment: Safe2PayPayment, data: DebitCardData) {
  return responseParser<DebitCardResponse>(
    await payment.post(PaymentsPath.DEBIT_CARD, data),
  )
}

export async function cryptocurrency(
  payment: Safe2PayPayment,
  data: CryptocurrencyData,
) {
  return responseParser<CryptocurrencyResponse>(
    await payment.post(PaymentsPath.CRYPTOCURRENCY, data),
  )
}

export function createAccountDepositRequestService({
  payment,
  api,
}: ServiceCreateParams) {
  return {
    pixDynamic: pixDynamic.bind(null, payment),
    pixStatic: pixStatic.bind(null, payment),
    boleto: boleto.bind(null, payment),
    releaseBoleto: releaseBoleto.bind(null, api),
    creditCard: creditCard.bind(null, payment),
    debitCard: debitCard.bind(null, payment),
    cryptocurrency: cryptocurrency.bind(null, payment),
  }
}
