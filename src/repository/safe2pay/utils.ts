import { join } from 'node:path/posix'

export type BaseResponseType<D = unknown> = {
  HasError: false
  ResponseDetail: D
}

export type BaseErrorType = {
  HasError: true
  ErrorCode: NumericalString
  Error: string
}

export class Safe2payError extends Error {
  public readonly errorCode: NumericalString

  constructor(message: string, errorCode: NumericalString) {
    super(message)
    this.errorCode = errorCode
  }
}

export function parser<R>(response: BaseResponseType<R>) {
  const { HasError: isError } = response
  if (isError) {
    const {
      ErrorCode: errorCode,
      Error: errorMessage,
    } = (response as unknown) as BaseErrorType
    throw new Safe2payError(errorMessage, errorCode)
  }
  return response.ResponseDetail
}

export function concatPath(...paths: Array<string[] | string>) {
  return join(...paths.flat(1))
}
