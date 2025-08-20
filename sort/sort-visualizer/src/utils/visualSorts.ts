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

export function* insertionSortSteps(
  arr: number[],
  opts?: any,
): Generator<number[]> {
  let list = arr.slice();
  for (let i = 1; i < list.length; i++) {
    let key = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      if (opts && opts.onBoundary) opts.onBoundary(i);
      yield list.slice();
      j--;
    }
    list[j + 1] = key;
    if (opts && opts.onBoundary) opts.onBoundary(i);
    yield list.slice();
  }
  if (opts && opts.onBoundary) opts.onBoundary(list.length);
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

export function* mergeSortSteps(
  arr: number[],
  opts?: any,
): Generator<number[]> {
  let list = arr.slice();
  const n = list.length;
  let subarrays: number[][] = list.map((x) => [x]);
  if (opts && opts.onSubarrays)
    opts.onSubarrays(subarrays.map((sub) => [...sub]));

  function* mergeSortGen(
    start: number,
    end: number,
  ): Generator<void, void, unknown> {
    if (end - start <= 0) return;
    const mid = Math.floor((start + end) / 2);
    yield* mergeSortGen(start, mid);
    yield* mergeSortGen(mid + 1, end);
    // Merge step
    let left = list.slice(start, mid + 1);
    let right = list.slice(mid + 1, end + 1);
    let i = 0,
      j = 0,
      k = start;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        list[k++] = left[i++];
      } else {
        list[k++] = right[j++];
      }
      // Update subarrays for visualization
      subarrays = [];
      let p = 0;
      while (p < n) {
        if (p === start) {
          subarrays.push(list.slice(start, end + 1));
          p = end + 1;
        } else {
          subarrays.push([list[p]]);
          p++;
        }
      }
      if (opts && opts.onSubarrays)
        opts.onSubarrays(subarrays.map((sub) => [...sub]));
      yield;
    }
    while (i < left.length) {
      list[k++] = left[i++];
      subarrays = [];
      let p = 0;
      while (p < n) {
        if (p === start) {
          subarrays.push(list.slice(start, end + 1));
          p = end + 1;
        } else {
          subarrays.push([list[p]]);
          p++;
        }
      }
      if (opts && opts.onSubarrays)
        opts.onSubarrays(subarrays.map((sub) => [...sub]));
      yield;
    }
    while (j < right.length) {
      list[k++] = right[j++];
      subarrays = [];
      let p = 0;
      while (p < n) {
        if (p === start) {
          subarrays.push(list.slice(start, end + 1));
          p = end + 1;
        } else {
          subarrays.push([list[p]]);
          p++;
        }
      }
      if (opts && opts.onSubarrays)
        opts.onSubarrays(subarrays.map((sub) => [...sub]));
      yield;
    }
  }
  // Run the recursive generator
  const gen = mergeSortGen(0, n - 1);
  let step = gen.next();
  while (!step.done) {
    yield list.slice();
    step = gen.next();
  }
  if (opts && opts.onSubarrays) opts.onSubarrays([list.slice()]);
  yield list.slice();
}

export function* quickSortSteps(arr: number[]): Generator<number[]> {
  let list = arr.slice();
  const stepList: number[][] = [];
  function* quickSortGen(
    list: number[],
    start = 0,
    end = list.length - 1,
  ): Generator<void, void, unknown> {
    if (start < end) {
      let pivotIndex = getPivot(list, start, end);
      stepList.push(list.slice());
      quickSortGen(list, start, pivotIndex - 1).next();
      quickSortGen(list, pivotIndex + 1, end).next();
    }
  }
  function getPivot(list: number[], start: number, end: number): number {
    let pivot = list[end],
      i = start - 1;
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

export function* bucketSortSteps(
  arr: number[],
  opts?: any,
): Generator<number[]> {
  let list = arr.slice();
  if (list.length === 0) return;
  let smallest = Math.min(...list),
    largest = Math.max(...list);
  let bucketCount = Math.floor(Math.sqrt(list.length));
  if (bucketCount < 1) bucketCount = 1;
  let range = (largest - smallest + 1) / bucketCount;
  let buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  // Distribute values into buckets
  for (let i = 0; i < list.length; i++) {
    let idx = Math.floor((list[i] - smallest) / range);
    if (idx === bucketCount) idx--;
    buckets[idx].push(list[i]);
    if (opts && opts.onBuckets) opts.onBuckets(buckets.map((b) => [...b]));
    yield list.slice();
  }

  // Sort each bucket and yield after each bucket is merged
  let merged: number[] = [];
  for (let b = 0; b < buckets.length; b++) {
    // Use insertion sort for each bucket for visualization
    let bucket = buckets[b];
    for (let i = 1; i < bucket.length; i++) {
      let key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) {
        bucket[j + 1] = bucket[j];
        j--;
      }
      bucket[j + 1] = key;
    }
    merged = ([] as number[]).concat(...buckets.slice(0, b + 1));
    if (opts && opts.onBuckets) opts.onBuckets(buckets.map((b) => [...b]));
    yield merged.slice();
  }
  // Final sorted array
  merged = ([] as number[]).concat(...buckets);
  if (opts && opts.onBuckets) opts.onBuckets(buckets.map((b) => [...b]));
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
  function* siftDown(
    heap: number[],
    i: number,
    n: number,
  ): Generator<number[]> {
    let left = 2 * i + 1,
      right = 2 * i + 2,
      min = i;
    if (left < n && heap[left] > heap[min]) min = left;
    if (right < n && heap[right] > heap[min]) min = right;
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
