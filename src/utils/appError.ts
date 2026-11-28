interface validationErrors {
    field: string,
    message: string
}


export class AppError extends Error {

    constructor(
        message: string,
        readonly statusCode: number,
        readonly errors?: validationErrors[]
    ) {  super(message)  }
}
