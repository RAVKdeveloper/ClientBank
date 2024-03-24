import { ServerErrors, ErrorsCode } from './server.errors'

export const indetifyError = (code: number): string => {
  switch (code) {
    case ErrorsCode.BadRequest:
      return ServerErrors.BadRequest
    case ErrorsCode.NotFound:
      return ServerErrors.NotFound
    case ErrorsCode.Forbiden:
      return ServerErrors.Forbiden
    case ErrorsCode.ServerInternal:
      return ServerErrors.ServerInternal
    case ErrorsCode.UnAuthorized:
      return ServerErrors.UnAuthorized
  }

  return ServerErrors.UnknownError
}
