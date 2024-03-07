export class ServerErrors extends Error {
   
    static readonly BadRequest = 'Пожалуйста проверьте заполняемые данные!!!'
    static readonly NotFound = 'К сожалению ресурс не найден :('
    static readonly Forbiden = 'Доступ запрещён....'
    static readonly UnAuthorized = `Вы неавторизованы в системе, перейдите по ссылке, 
    чтобы авторизоваться: http://localhost:3000/login` 
    static readonly ServerInternal = 'Сервер не отвечает :('
    static readonly UnknownError = 'Произошла неизвестная ошибка, попробуйте позже'
 
}

export enum ErrorsCode {
    BadRequest = 400,
    NotFound = 404,
    Forbiden = 403,
    UnAuthorized = 401,
    ServerInternal = 500
}