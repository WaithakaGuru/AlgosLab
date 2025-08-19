/**
 * Generates a random array of @param size items and returns it. Default size is 10 items 
 * @param size The number of elements in the array to be generated.
 * @returns The generated array.
 */
export default function generateRandomArray(size: number = 10): number[]{
    // generate a random number and remove the decimal point
    const randomNumberString =()=> `${Math.random()}`.split(".")[1];
    
    const randomArray: number[] = [];
    let count = size > 100? 100 : size < 10? 10 : size;
    let arrayPointer = 0, current = randomNumberString();
    for(let i = 0; i < count; i++) {
        if(arrayPointer > 14){
            arrayPointer = 0;
            current = randomNumberString();
        }
        randomArray[i] = Number(current[arrayPointer++]);
    }
    return randomArray; 
}

console.log(generateRandomArray(16));