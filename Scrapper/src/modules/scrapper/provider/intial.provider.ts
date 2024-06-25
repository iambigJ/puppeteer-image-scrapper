import { Injectable } from '@nestjs/common';
import {ParrentRepository} from "./parrent.repository";
import {array_utils} from "../../../common/global/util.arrays";
import {save} from "./scrapper.save";
import { ScrapperService } from './scrapper.service';
import { ConfigService } from '@nestjs/config';
import {ChildRepository} from "./child.repository";


@Injectable()
export class inital_divar{
    constructor(
        private readonly Scrapper: ScrapperService,
        private readonly parrentModel: ParrentRepository,
        private readonly Child: ChildRepository,
        private readonly config: ConfigService
    ) {
    }

    async scrapp_intial(carname: string , url: string): Promise<void> {
        //-- scrap parrent of image urls
        const parrent_scrapps: string[] = await this.Scrapper.srapp_parrent_url(url)
        //-- filter and array of parrent
        const parrent_result: string[] =  array_utils.findUniqueStrings(parrent_scrapps)
        const parrent_mongo: string[] = parrent_result.flat(Infinity)
        //-- insert data to database
        await this.parrentModel.findAndUpdate({ CarName: carname}, {CarName: carname, Url: parrent_mongo})
        //-- scrapp the photos url
        const url_images : string[] = await this.Scrapper.scrapp_images(carname)
        const final_urls: string[] = array_utils.filter(url_images)
        await this.Child.findAndUpdate({CarName: carname}, {CarName: carname, Url: final_urls})
        //-- get and save images
        await save.Saveimages(final_urls,carname)
    }

    async for_intial(){
        const cars = this.config.get<Array<string>>('cars')
        for (let i of cars){
            const carname : string = i[0]
            const Url: string = i[1]
           await  this.scrapp_intial(carname,Url)

        }
    }


}