
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type parrentType = HydratedDocument<parrentClass>;

@Schema()
export class parrentClass {
    @Prop({ required: true, unique: false })
    CarName: string;

    @Prop()
    Url: string[];

}

export const parrentSchema = SchemaFactory.createForClass(parrentClass);
