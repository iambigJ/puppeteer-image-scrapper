import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
    constructor() {
        super({
            status: 494,
            error: 'CustomException ali j',
            message : 'bad request',
        }, HttpStatus.NOT_FOUND);
    }
}