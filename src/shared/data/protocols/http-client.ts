export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  // TODO: Delete option `withOldUrl` when all api get /v2 version
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  unprocessableEntity = 422,
  serverError = 500,
  serviceUnavailable = 503
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export type HttpValidationError = HttpServerError & {
  param: string
}

export type HttpServerError = {
  name: string
  message: string
}
