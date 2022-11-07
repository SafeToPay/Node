import { parser as responseParser } from '../../../../repository/safe2pay/utils'
import { BoletoPath } from '../../constants'
import { CreateServiceParamsType } from '../../types/service'
import {
  CreateBoletoData,
  CreateBoletoResponse,
  ReleaseBoletoParams,
  ReleaseBoletoResponse,
  ChangeBoletoData,
  ChangeBoletoResponse,
  CancelBoletoParams,
  CancelBoletoResponse,
} from '../../types/payments/boleto'

export async function createBoleto<T = unknown>(
  { payment }: CreateServiceParamsType,
  data: CreateBoletoData<T>,
) {
  return responseParser<CreateBoletoResponse>(
    await payment.post(BoletoPath.CREATE, data),
  )
}

export async function changeBoleto(
  { payment }: CreateServiceParamsType,
  data: ChangeBoletoData,
) {
  return responseParser<ChangeBoletoResponse>(
    await payment.post(BoletoPath.CHANGE, data),
  )
}

export async function releaseBoleto(
  { api }: CreateServiceParamsType,
  params: ReleaseBoletoParams,
) {
  return responseParser<ReleaseBoletoResponse>(
    await api.get(BoletoPath.RELEASE, params),
  )
}

export async function cancelBoleto(
  { api }: CreateServiceParamsType,
  params: CancelBoletoParams,
) {
  return responseParser<CancelBoletoResponse>(
    await api.delete(BoletoPath.CANCEL, params),
  )
}
