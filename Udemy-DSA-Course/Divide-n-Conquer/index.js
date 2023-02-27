//linear search algo
//time complexity O(n)
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

//binary search is divide and conquer
//time complexicity = Log(N)

let a = [1, 2, 4, 5, 7, 9, 10, 23, 51, 66];

function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array(middle);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else return middle;
  }
  return -1;
}
