import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import {MyLogger} from './common/loggercustom'
import {ScrapperModule} from "./modules/scrapper/scrapper.module";
import {inital_divar} from './modules/scrapper/provider/intial.provider'
import {ScrapperService} from "./modules/scrapper/provider/scrapper.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule,{
        logger: new MyLogger()
    });
    const scrapper  = app.select(ScrapperModule).get(inital_divar)
    await scrapper.for_intial()
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors) => {
                const result = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints[Object.keys(error.constraints)[0]],
                }));
                return new BadRequestException(result);
            },
            stopAtFirstError: true,
        }),

    );
}
bootstrap();