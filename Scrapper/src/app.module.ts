import { Module } from '@nestjs/common';
import {ScrapperModule} from './modules/scrapper/scrapper.module'
import {mongooseConfig} from '../config/mongoose.config'
import { ConfigModule } from '@nestjs/config';
import {default as configload, cars} from '../config/configuration'

@Module({
  imports: [
      ConfigModule.forRoot({
          load: [cars],
          isGlobal: true,

      }),
      mongooseConfig,
      ScrapperModule
        ]})
export class AppModule {
    constructor() {}

}
