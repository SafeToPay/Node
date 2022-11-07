export enum HttpMethodEnum {
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
}

export enum ResponseEnum {
  ARRAYBUFFER = 'arraybuffer',
  JSON = 'json',
  TEXT = 'text',
  STREAM = 'stream',
}

export interface BasicCredentialsType {
  username: string
  password: string
}

export type UrlType = string | URL
export type ParamsType =
  | string
  | Record<string, string>
  | URLSearchParams
  | string[][]

export type HttpMethodType = AnyCase<keyof typeof HttpMethodEnum>
export type ResponseType = AnyCase<keyof typeof ResponseEnum>

export type HeadersType = [string, string][] | Record<string, string> | Headers

export type ConfigType<D = unknown> = {
  method?: HttpMethodEnum | HttpMethodType
  url?: UrlType
  baseURL: UrlType
  data?: D
  signal?: AbortSignal
  headers?: HeadersType
  params?: ParamsType
  timeout?: Milliseconds
  auth?: BasicCredentialsType
  responseType?: ResponseType | ResponseEnum
  parser?: <R = unknown, P = unknown>(response: P) => R
}

export class Config<D = unknown> implements ConfigType {
  method: HttpMethodType = HttpMethodEnum.GET
  url?: UrlType
  baseURL: UrlType = 'http://localhost'
  data?: D
  signal: AbortSignal = new AbortController().signal
  headers: HeadersType = new Headers()
  params?: ParamsType
  timeout?: Milliseconds
  auth?: BasicCredentialsType
  responseType: ResponseType | ResponseEnum = ResponseEnum.JSON

  constructor(config: WithOptional<ConfigType<D>, 'baseURL'> = {}) {
    Object.assign(this, config)
  }
}

export class HTTPResponseError extends Error {
  response: Response
  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`)
    this.response = response
  }
}

const checkStatus = (response: Response) => {
  if (response.ok) {
    // response.status >= 200 && response.status < 300
    return response
  } else {
    throw new HTTPResponseError(response)
  }
}

const parserParams = (params: ConfigType['params']) => {
  if (params instanceof URLSearchParams) {
    return params.toString()
  }

  return new URLSearchParams(params).toString()
}

const parserResponse = <R = unknown>(
  response: Response,
  responseType: ResponseType,
): Promise<R | ArrayBuffer | string> | ReadableStream<Uint8Array> | null => {
  const type = responseType.toLowerCase()

  if (type === new String(ResponseEnum.ARRAYBUFFER)) {
    return response.arrayBuffer()
  }

  if (type === ResponseEnum.JSON) {
    return response.json()
  }

  if (type === ResponseEnum.STREAM) {
    return response.body
  }

  return response.text()
}

export async function REQUEST<D = unknown, R = unknown>(
  config: ConfigType<D> = new Config<D>(),
) {
  const {
    url = '',
    baseURL,
    method,
    data,
    headers,
    params,
    auth,
    responseType = ResponseEnum.JSON,
  } = config

  const fetchURL = new URL(url.toString(), baseURL?.toString())
  const fetchParams = parserParams(params)
  const fetchHeaders = new Headers(headers)

  if (auth) {
    const { username, password } = auth
    fetchHeaders.set(
      'Authorization',
      `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
    )
  }

  fetchURL.search = fetchParams

  const fetchConfig = {
    method: method || HttpMethodEnum.GET,
    headers: fetchHeaders,
    body: data ? JSON.stringify(data) : undefined,
  }

  const response = await fetch(fetchURL.toString(), fetchConfig)

  checkStatus(response)

  const dataResponse = await parserResponse<R>(response, responseType)

  if (config.parser) {
    return config.parser(dataResponse) as R
  }

  return dataResponse as R
}

export async function GET<R = unknown>(
  url?: UrlType | ConfigType,
  params?: ParamsType | ConfigType,
  config: WithOptional<ConfigType, 'baseURL'> = new Config(),
) {
  config.method = HttpMethodEnum.GET

  if (!config.params && params) {
    config.params = params as ParamsType
  }

  if (typeof url === 'string' || url instanceof URL) {
    if (config.baseURL) {
      config.baseURL = url
    } else {
      config.url = url
    }
  }

  return REQUEST<undefined, R>(config as ConfigType<undefined>)
}

export async function DELETE<R = unknown>(
  url?: UrlType | ConfigType,
  params?: ParamsType | ConfigType,
  config: WithOptional<ConfigType, 'baseURL'> = new Config(),
) {
  config.method = HttpMethodEnum.DELETE

  if (!config.params && params) {
    config.params = params as ParamsType
  }

  if (typeof url === 'string' || url instanceof URL) {
    if (config.baseURL) {
      config.baseURL = url
    } else {
      config.url = url
    }
  }

  return REQUEST<undefined, R>(config as ConfigType<undefined>)
}

export async function POST<D = unknown, R = unknown>(
  url?: UrlType | ConfigType<D>,
  data?: D | ConfigType<D>,
  config: WithOptional<ConfigType<D>, 'baseURL'> = new Config<D>(),
) {
  config.method = HttpMethodEnum.POST

  if (!config.data && data) {
    config.data = data as D
  }

  if (typeof url === 'string' || url instanceof URL) {
    if (config.baseURL) {
      config.baseURL = url
    } else {
      config.url = url
    }
  }

  return REQUEST<D, R>(config as ConfigType<D>)
}

export async function PUT<D = unknown, R = unknown>(
  url?: UrlType | ConfigType<D>,
  data?: D | ConfigType<D>,
  config: WithOptional<ConfigType<D>, 'baseURL'> = new Config<D>(),
) {
  config.method = HttpMethodEnum.PUT

  if (!config.data && data) {
    config.data = data as D
  }

  if (typeof url === 'string' || url instanceof URL) {
    if (config.baseURL) {
      config.baseURL = url
    } else {
      config.url = url
    }
  }

  return REQUEST<D, R>(config as ConfigType<D>)
}

export async function PATCH<D = unknown, R = unknown>(
  url?: UrlType | ConfigType<D>,
  data?: D | ConfigType<D>,
  config: WithOptional<ConfigType<D>, 'baseURL'> = new Config<D>(),
) {
  config.method = HttpMethodEnum.PATCH

  if (!config.data && data) {
    config.data = data as D
  }

  if (typeof url === 'string' || url instanceof URL) {
    if (config.baseURL) {
      config.baseURL = url
    } else {
      config.url = url
    }
  }

  return REQUEST<D, R>(config as ConfigType<D>)
}

export function create(baseURL: UrlType | ConfigType, config?: ConfigType) {
  const defaultConfig = new Config(
    typeof baseURL === 'object'
      ? (baseURL as ConfigType)
      : { ...(config || {}), baseURL },
  )

  return {
    get: <R = unknown>(
      url: UrlType,
      params?: ParamsType,
      config?: ConfigType,
    ) => GET<R>(url, params, { ...defaultConfig, ...config }),

    delete: <R = unknown>(
      url: UrlType,
      params?: ParamsType,
      config?: ConfigType,
    ) => DELETE<R>(url, params, { ...defaultConfig, ...config }),

    post: async function post<D = unknown, R = unknown>(
      url: UrlType,
      data?: D,
      config?: ConfigType<D>,
    ) {
      return POST<D, R>(url, data, {
        ...defaultConfig,
        ...config,
      } as ConfigType<D>)
    },

    put: async function put<D = unknown, R = unknown>(
      url: UrlType,
      data?: D,
      config?: ConfigType<D>,
    ) {
      return PUT<D, R>(url, data, { ...defaultConfig, ...config } as ConfigType<
        D
      >)
    },

    patch: async function patch<D = unknown, R = unknown>(
      url: UrlType,
      data?: D,
      config?: ConfigType<D>,
    ) {
      return PATCH<D, R>(url, data, {
        ...defaultConfig,
        ...config,
      } as ConfigType<D>)
    },
  }
}
