import axios, { AxiosResponse } from 'axios'

import {
  HttpRequest,
  HttpResponse,
  HttpClient,
  HttpStatusCode,
  HttpValidationError,
  HttpServerError
} from '@/shared/data'
import { AccessDeniedError, SystemError, UnexpectedError, ValidationError } from '@/shared/domain'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/${data.url}`,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error: any) {
      axiosResponse = error.response

      if (axiosResponse === undefined) {
        throw new UnexpectedError()
      }
    }
    switch (axiosResponse.status) {
      case HttpStatusCode.created:
      case HttpStatusCode.noContent:
      case HttpStatusCode.ok:
        return {
          statusCode: axiosResponse.status,
          body: axiosResponse.data
        }

      case HttpStatusCode.badRequest: {
        const responseError: HttpServerError = axiosResponse.data
        throw new SystemError(responseError?.message)
      }

      case HttpStatusCode.unprocessableEntity: {
        const responseError: HttpValidationError = axiosResponse.data
        throw new ValidationError(responseError.param, responseError.message)
      }

      case HttpStatusCode.unauthorized:
        throw new AccessDeniedError()

      default:
        throw new UnexpectedError()
    }
  }
}
