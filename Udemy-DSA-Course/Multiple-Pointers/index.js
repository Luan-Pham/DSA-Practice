// return pair within sorted array that sum up to 0

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

let arr1 = [-3, -2, -1, 0, 1, 2, 3];

let arr2 = [-1, 0, 3];

sumZero(arr1);
sumZero(arr2);

function twoPointers(arr) {
  left = 0;
  right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      console.log[(arr[left], arr[right])];
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//count unique values within a sorted arrays

let a = [1, 1, 1, 1, 1, 2];
let b = [1, 2, 3, 4, 5, 7, 12, 13, 15];
let c = [-2, -1, -1, 0, 1];

function uniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let left = 0;
  let right = 1;
  for (right = 0; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

function cleanerUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;

  for (j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(uniqueValues(a));
console.log(cleanerUniqueValues(a));
