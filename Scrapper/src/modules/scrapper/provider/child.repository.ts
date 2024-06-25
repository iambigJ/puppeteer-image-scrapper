import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {GenericRepository} from "../../../services/abstract.repository";
import { imageChildClass,ImageSchema } from '../entity/Child'
@Injectable()
export class ChildRepository extends  GenericRepository{
    constructor(
        @InjectModel(imageChildClass.name) private readonly childRepository: Model<typeof ImageSchema>)
    {     super(childRepository) }

}