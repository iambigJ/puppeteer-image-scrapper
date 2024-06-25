import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
    constructor(customMessage?: string) {
        const message = customMessage || 'Not Found';
        super(message, HttpStatus.NOT_FOUND);
    }
}