/*

Sliding Window - Maximum Sum Subarray of Size K: Given an array of integers and a positive integer k, find the maximum sum of any contiguous subarray of size k.
For example, given the array [2, 1, 5, 1, 3, 2] and k = 3, the maximum sum subarray of size k is [5, 1, 3], which has a sum of 9.

Sliding Window - Longest Substring Without Repeating Characters: Given a string s, find the length of the longest substring without repeating characters.
For example, given the string "abcabcbb", the longest substring without repeating characters is "abc", which has a length of 3.

Fixed Window - Count Number of Subarrays With Maximum: Given an array of integers, find the number of contiguous subarrays with a maximum element equal to the maximum element of the entire array.



1- In which conditions does our runner run? 
2- When to record our temporary solution?
3- How to choose our Optimal Solution?
4- In which conditions does our catcher run?


run adds to the temp,
catcher subtracts from the temp
*/

const maxSubArray = (arr, k) => {
  let cat = 0;
  let counter = 0;
  let temp = 0;
  let optimal = -1;
  for (let i = 0; i < arr.length; i++) {
    if (counter < k) {
      temp += arr[i];
      counter++;
    }
    if (counter == k) {
      optimal = Math.max(temp, optimal);
      temp -= arr[cat];
      counter--;
      cat++;
    }
  }
  console.log(optimal);
  return optimal;
};

let test = [2, 1, 5, 1, 3, 2];
let test2 = [3, 4, 6, 2, 6, 5, 3, 6, 1];
maxSubArray(test, 5);
maxSubArray(test2, 4);
