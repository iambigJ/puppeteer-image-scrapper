import {Injectable,Global} from "@nestjs/common";

@Injectable()
@Global()
export class array_utils{
     static findUniqueStrings<T>(arr: T[]): T[] {
        // Create a Set to store unique items
        const uniqueSet: Set<T> = new Set(arr)

        // Convert the Set back to an array to get unique items
        const uniqueArray: T[] = Array.from<T>(uniqueSet)

        return uniqueArray
    }
     static findDuplicateStrings(arr) :void {
        const stringCount = {} // Object to store string occurrences

        // Count occurrences of each string in the array
        arr.forEach(str => {
            if (stringCount[str]) {
                stringCount[str]++
            } else {
                stringCount[str] = 1
            }
        })

        // Find and display duplicates along with their counts
        Object.keys(stringCount).forEach(key => {
            if (stringCount[key] > 1) {
                console.log(`String "${key}" appears ${stringCount[key]} times.`)
            }
        })
    }
    static filter(arr: Array<any>){
        const uniqueUrls : string[] = array_utils.findUniqueStrings(arr)
        const flatArray : string[]  = uniqueUrls.flat(Infinity)
        const filteredUrls : string[] = flatArray.filter(url => url.startsWith('http'))
        const ended : string[] = filteredUrls.filter(url => url.endsWith('jpg') || url.endsWith('png'))
        return ended
    }
}
