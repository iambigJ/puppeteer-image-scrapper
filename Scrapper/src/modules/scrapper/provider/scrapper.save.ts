
import axios from 'axios'
import * as fs from 'fs'
import {existsSync, mkdirSync} from 'fs'
import {join} from 'path'


export class save {
    static async Saveimages (result: string[], mainCarname: string)  {
        let count: number = 0
        try {

            const directoryPath =  `${process.cwd()}/data`
            const filePath = `${process.cwd()}/data/${mainCarname}`
            if (!existsSync(directoryPath)) {
               await mkdirSync(directoryPath)
            }
            if (!existsSync(filePath)) {
               await mkdirSync(filePath)
            }
            for (const i of result) {
                try {
                    const response = await axios.get(i, {
                        responseType: 'arraybuffer'
                    })
                    count++
                    const spliter = i.split('/')
                    const image_name = spliter[spliter.length - 1]
                    fs.writeFileSync(`${filePath}/${count}${image_name}.jpg`, response.data)
                    // console.log('Image saved as ok.jpg');
                    console.log(` image ${count} sucsesfuly stored`)
                } catch (err) {
                    console.log(err)
                    continue
                }
            }
        } catch (error) {
            console.error(error)
        }

    }
}
