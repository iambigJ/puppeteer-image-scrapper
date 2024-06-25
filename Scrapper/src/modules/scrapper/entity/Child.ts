
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Imagetype = HydratedDocument<imageChildClass>;

@Schema()
export class imageChildClass {
    @Prop({ required: true, unique: false })
    CarName: string;

    @Prop()
    Url: string[];

}

export const ImageSchema = SchemaFactory.createForClass(imageChildClass);
