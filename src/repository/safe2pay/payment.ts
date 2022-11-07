import { create } from '../../lib/request'
import { SAFE2PAY_URL_PAYMENT as baseURL } from '../../constants/config'

const DEFAULT_CONTENT_TYPE = 'application/json'

export function createSafe2PayPayment(apiKey: string) {
  return create({
    baseURL,
    headers: {
      'Content-Type': DEFAULT_CONTENT_TYPE,
      'X-API-KEY': apiKey,
    },
  })
}

export type Safe2PayPayment = ReturnType<typeof createSafe2PayPayment>
