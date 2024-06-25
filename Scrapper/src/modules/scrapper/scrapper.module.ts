import { Module} from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import  {MongooseModule} from "@nestjs/mongoose";
import {parrentSchema, parrentClass} from "./entity/Parrent";
import {ImageSchema,imageChildClass} from "./entity/Child";
import {ParrentRepository} from "./provider/parrent.repository";
import {inital_divar} from "./provider/intial.provider";
import {ChildRepository} from "./provider/child.repository";
@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: parrentClass.name,
                useFactory: () => {
                    const schema = parrentSchema;
                    schema.post('findOneAndUpdate', () => console.log('pre update'));
                    return schema;
                },
            },
            {
                name: imageChildClass.name,
                useFactory: () => {
                    const schema = ImageSchema;
                    // Add any additional schema configurations or hooks here
                    return schema;
                },
            },
            // Add more entities if needed
        ]),
    ],
    providers: [inital_divar,
                ScrapperService,
                ParrentRepository,
                ChildRepository
    ],
})


export class ScrapperModule {

}

