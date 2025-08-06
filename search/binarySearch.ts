function binarySearch(arr: number[], target: number) {
    let left = 0, right= arr.length-1, iterations: number = 0
    while(right >= left){
        let midVal = (left + right)/2;
        let mid = Math.ceil(midVal);
        console.log(`\tleft-> ${left}:  right-> ${right}: midpoint-> ${mid}`);
        if(target === arr[mid]) return  `\tTotal iterations Made: ${iterations+1}\n\tTarget found at index: ${mid}\n`;
        if(target < arr[mid]) right = mid - 1;
        else left = mid + 1;
        iterations++
    }
    return `\t Total iterations made: ${iterations}\n\tTarget not found!!\n`;
}

