import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {parrentClass, parrentSchema} from '../entity/Parrent';
import { ParrentDto } from '../DTO/parrent.dto';
import {GenericRepository} from "../../../services/abstract.repository";
@Injectable()
export class ParrentRepository extends  GenericRepository{
    constructor(
        @InjectModel(parrentClass.name) private readonly parrentModel: Model<typeof parrentSchema>,
) {     super(parrentModel)
    }



}