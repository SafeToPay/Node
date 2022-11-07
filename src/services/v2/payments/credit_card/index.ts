import { parser as responseParser } from '../../../../repository/safe2pay/utils'
import { CreditCardPath } from '../../constants'
import { CreateServiceParamsType } from '../../types/service'
import {
  CreateCreditCardData,
  CreateCreditCardResponse,
  CancelCreditCardParams,
  CancelCreditCardResponse,
  CaptureCreditCardParams,
  CaptureCreditCardResponse,
} from '../../types/payments/credit_card'

export async function createCreditCard<T = unknown>(
  { payment }: CreateServiceParamsType,
  data: CreateCreditCardData<T>,
) {
  return responseParser<CreateCreditCardResponse>(
    await payment.post(CreditCardPath.CREATE, data),
  )
}

export async function cancelCreditCard(
  { payment }: CreateServiceParamsType,
  params: CancelCreditCardParams,
) {
  return responseParser<CancelCreditCardResponse>(
    await payment.delete(CreditCardPath.CANCEL, params),
  )
}

export async function captureCreditCard(
  { payment }: CreateServiceParamsType,
  params: CaptureCreditCardParams,
) {
  return responseParser<CaptureCreditCardResponse>(
    await payment.put(CreditCardPath.CAPTURE, params),
  )
}
