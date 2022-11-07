import { parser as responseParser } from '../../../../repository/safe2pay/utils'
import { PixPath } from '../../constants'
import { CreateServiceParamsType } from '../../types/service'
import {
  DynamicPixData,
  DynamicPixResponse,
  StaticPixData,
  StaticPixResponse,
  CancelPixParams,
  CancelPixResponse,
} from '../../types/payments/pix'

export async function createDynamicPix<T = unknown>(
  { payment }: CreateServiceParamsType,
  data: DynamicPixData<T>,
) {
  return responseParser<DynamicPixResponse>(
    await payment.post(PixPath.DYNAMIC, data),
  )
}

export async function createStaticPix(
  { payment }: CreateServiceParamsType,
  data: StaticPixData,
) {
  return responseParser<StaticPixResponse>(
    await payment.post(PixPath.STATIC, data),
  )
}

export async function cancelPix(
  { payment }: CreateServiceParamsType,
  params: CancelPixParams,
) {
  return responseParser<CancelPixResponse>(
    await payment.delete(PixPath.CANCEL, params),
  )
}
