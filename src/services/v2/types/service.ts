import { Safe2PayApi } from 'repository/safe2pay/api'
import { Safe2PayPayment } from 'repository/safe2pay/payment'

export type CreateServiceParamsType = {
  api: Safe2PayApi
  payment: Safe2PayPayment
}
