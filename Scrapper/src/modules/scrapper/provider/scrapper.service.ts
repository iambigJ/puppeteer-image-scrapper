import { Injectable, Inject } from '@nestjs/common';
import puppeteer from 'puppeteer-core' // Make sure to import puppeteer
import {ParrentRepository} from "./parrent.repository";
import {array_utils} from "../../../common/global/util.arrays";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ScrapperService {
    constructor(
        private readonly scrapperRepo: ParrentRepository,
        private readonly config: ConfigService

    ) {}

    test(){
       console.log( this.config.get('cars'))

    }

    async srapp_parrent_url(divar_url){
            let browser
            const hrefResult: string[] = []
            try {
                browser  = await puppeteer.launch({
                    args: ['--no-sandbox'],
                    executablePath: '/bin/chromium-browser',
                    headless: 'new' })
                const page = await browser.newPage()
                await page.setDefaultTimeout(10000)
                await page.goto(divar_url, {
                    waitUntil: 'domcontentloaded'
                })
                while (true) {
                    await page.waitForSelector('a')
                    const Result = await page.$$eval('#post-list-container-id a',
                        elements  => elements.map(item => item.href))
                    if (!Result) {
                        break
                    }
                    hrefResult.push(Result)
                    const previousHeight  = await page.evaluate('document.body.scrollHeight')
                    if (previousHeight > 60000) {
                        break
                    }
                    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
                    await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`)
                    await page.waitForTimeout(2000)
                    console.log(previousHeight)
                    console.log(Result.length)
                }
            } catch (err) {
                console.error('Error occurred outside loop:', err)
                // Handle errors occurring outside the loop if needed
            } finally {
                if (browser) {
                    await browser.close()
                }
                return hrefResult
        }

    }

    async scrapp_images(mainCarname: string): Promise<string[]> {
        interface results  {
            Url: string
        }
            let browser
            try {
                const result : results  = await this.scrapperRepo.findOne({CarName: mainCarname})
                console.log( result.Url)
                if (!result) {
                    console.log('No matching record found.')
                    return
                }
                browser = await puppeteer.launch({
                    args: ['--no-sandbox'],
                    executablePath: '/bin/chromium-browser',
                    headless: 'new' })
                const urls   = result.Url

                const arr : string[] = []
                for (const url of urls) {
                    try {
                        const page = await browser.newPage()
                        await page.setDefaultTimeout(5000)
                        await page.goto(url, {
                            waitUntil: 'domcontentloaded'
                        })
                        await page.waitForTimeout(2000)
                        await page.waitForSelector('img')

                        const image_src = await page.$$eval('.kt-row img', (elements) => {
                            return elements.map((element) => element.src)
                        })
                        arr.push(image_src)
                        const page_url = await page.url()
                        console.log(arr.length)
                        console.log(page_url)
                        console.log(image_src)
                        await page.close()
                    } catch (err) {
                        console.log(`Error processing URL ${url}: ${err}`)
                        continue
                    }
                }
                //filter array and return

                return arr
            } catch (err) {
                console.log(`Error: ${err}`)
            } finally {
                if (browser) {
                    await browser.close()
                }

        }
    }

}
