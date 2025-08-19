// Step-by-step generator versions of sorting algorithms for visualization
// Each yields the array state at every significant step

export function* bubbleSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  let swaps: number;
  do {
    swaps = 0;
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        swaps++;
        yield list.slice();
      }
    }
  } while (swaps > 0);
  yield list.slice();
}

export function* insertionSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  for (let boundary = 1; boundary < list.length; boundary++) {
    for (let j = boundary - 1; j >= 0; j--) {
      const current = list[boundary];
      if (list[current] < list[j]) {
        [list[current], list[j]] = [list[j], list[current]];
        yield list.slice();
      }
    }
  }
  yield list.slice();
}

export function* selectionSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  for (let i = list.length - 1; i > 0; i--) {
    let max = 0;
    for (let j = 1; j <= i; j++) {
      if (list[j] > list[max]) max = j;
    }
    [list[max], list[i]] = [list[i], list[max]];
    yield list.slice();
  }
  yield list.slice();
}

export function* mergeSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  const stepList: number[][] = [];
  function* mergeSortGen(list: number[], yieldStep: (a: number[]) => void): Generator<void, void, unknown> {
    if (list.length <= 1) return;
    const len = list.length - 1;
    const middle = Math.floor(len / 2);
    const leftArray: number[] = [], rightArray: number[] = [];
    let j = 0;
    for (let i = 0; i <= len; i++) {
      if (i <= middle) leftArray[i] = list[i];
      else {
        rightArray[j] = list[i];
        j++;
      }
    }
    mergeSortGen(leftArray, yieldStep).next();
    mergeSortGen(rightArray, yieldStep).next();
    merge(leftArray, rightArray, list, yieldStep);
    yieldStep(list.slice());
  }
  function merge(leftArray: number[], rightArray: number[], fullArray: number[], yieldStep: (a: number[]) => void) {
    let leftPointer = 0, rightPointer = 0;
    for (let i = 0; i < fullArray.length; i++) {
      if (leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if (leftArray[leftPointer] <= rightArray[rightPointer]) fullArray[i] = leftArray[leftPointer++];
        else fullArray[i] = rightArray[rightPointer++];
      } else fullArray[i] = rightPointer < rightArray.length ? rightArray[rightPointer++] : leftArray[leftPointer++];
      yieldStep(fullArray.slice());
    }
  }
  mergeSortGen(list, (a) => stepList.push(a)).next();
  for (const step of stepList) yield step;
}

export function* quickSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  const stepList: number[][] = [];
  function* quickSortGen(list: number[], start = 0, end = list.length - 1): Generator<void, void, unknown> {
    if (start < end) {
      let pivotIndex = getPivot(list, start, end);
      stepList.push(list.slice());
      quickSortGen(list, start, pivotIndex - 1).next();
      quickSortGen(list, pivotIndex + 1, end).next();
    }
  }
  function getPivot(list: number[], start: number, end: number): number {
    let pivot = list[end], i = start - 1;
    for (let j = start; j < end; j++) {
      if (list[j] < pivot) {
        i++;
        [list[i], list[j]] = [list[j], list[i]];
        stepList.push(list.slice());
      }
    }
    [list[i + 1], list[end]] = [list[end], list[i + 1]];
    stepList.push(list.slice());
    return i + 1;
  }
  quickSortGen(list).next();
  for (const step of stepList) yield step;
  yield list.slice();
}

export function* bucketSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  let smallest = list[0], largest = list[0], bucketCount = 5;
  for (const item of list) {
    if (item < smallest) smallest = item;
    else if (item > largest) largest = item;
  }
  const range = Math.floor((largest - smallest) / bucketCount);
  if (list.length < bucketCount) {
    yield* quickSortSteps(list);
    return;
  }
  let buckets: Array<Array<number>> = [];
  for (let i = 0; i < bucketCount; i++) buckets.push([]);
  for (let i = 0; i < list.length; i++) {
    if (list[i] <= range) buckets[0].push(list[i]);
    else if (list[i] <= range * 2) buckets[1].push(list[i]);
    else if (list[i] <= range * 3) buckets[2].push(list[i]);
    else if (list[i] <= range * 4) buckets[3].push(list[i]);
    else buckets[4].push(list[i]);
  }
  for (let b = 0; b < buckets.length; b++) {
    yield* quickSortSteps(buckets[b]);
  }
  let merged = ([] as number[]).concat(...buckets);
  yield merged.slice();
}

export function* heapSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  // MinHeap logic for visualization
  function* heapify(arr: number[]): Generator<number[]> {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      yield* siftDown(arr, i, arr.length);
    }
  }
  function* siftDown(heap: number[], i: number, n: number): Generator<number[]> {
    let left = 2 * i + 1, right = 2 * i + 2, min = i;
    if (left < n && heap[left] < heap[min]) min = left;
    if (right < n && heap[right] < heap[min]) min = right;
    if (min !== i) {
      [heap[i], heap[min]] = [heap[min], heap[i]];
      yield heap.slice();
      yield* siftDown(heap, min, n);
    }
  }
  yield* heapify(list);
  for (let end = list.length - 1; end > 0; end--) {
    [list[0], list[end]] = [list[end], list[0]];
    yield list.slice();
    yield* siftDown(list, 0, end);
  }
  yield list.slice();
}
