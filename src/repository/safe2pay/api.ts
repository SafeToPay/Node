import { create } from '../../lib/request'
import { SAFE2PAY_URL_API as baseURL } from '../../constants/config'

const DEFAULT_CONTENT_TYPE = 'application/json'

export function createSafe2PayApi(apiKey: string) {
  return create({
    baseURL,
    headers: {
      'Content-Type': DEFAULT_CONTENT_TYPE,
      'X-API-KEY': apiKey,
    },
  })
}

export type Safe2PayApi = ReturnType<typeof createSafe2PayApi>
