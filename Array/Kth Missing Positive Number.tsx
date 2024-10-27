function findKthPositive(arr: number[], k: number): number {
  let missingCount = 0;
  let current = 1;
  let i = 0;

  while (missingCount < k) {
    if (i < arr.length && arr[i] === current) {
      i++;
    } else {
      missingCount++;
    }

    if (missingCount < k) current++;
  }

  return current;
}
