import quickSort from "./quickSort";
/**
 * Works by dividng the elements into buckets where each buckets hold a range of values e.g. 1-20, 21-40. 
 * Each busket is sorted then the values are grouped back from the first bucket to the last.
 * @param list The list of items to be sorted
 * @returns The sorted list 
 */
export default function bucketSort(list: number[]): number[]{
    let smallest = list[0], largest = list[0], bucketCount = 5;
    for(const item of list) {
        if(item < smallest) smallest =  item
        else if(item > largest) largest = item
    }
    const range = Math.floor((largest - smallest) / bucketCount);
    let buckets: Array<Array<number>> = [[],[],[],[],[]]
    if(list.length < bucketCount) return quickSort(list)
    for(let i = 0; i<list.length; i++){
        if(list[i] <= range) buckets[0].push(list[i])
        else if(list[i] <= range*2) buckets[1].push(list[i])
        else if(list[i] <= range*3) buckets[2].push(list[i])
        else if(list[i] <= range*4) buckets[3].push(list[i])
        else buckets[4].push(list[i])
    }
    for(const bucket of buckets) quickSort(bucket);
    return list=[...buckets[0], ...buckets[1], ...buckets[2], ...buckets[3], ...buckets[4]]
    // return buckets.flat()
}