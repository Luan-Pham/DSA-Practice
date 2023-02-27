//write a function in order to check if two strings are anagrams
//example "cat" && "bat" returns false
// "tacocat" && "tacocat" returns true
// "lime" && "mile" returns true

function Anagaram(str1, str2) {
  //check if lengths are equal
  if (str1.length !== str2.length) {
    return false;
  }

  //create objs to store counters
  let out1 = {};
  let out2 = {};

  //loop through each obj and count frequency of each element
  for (let char of str1) {
    out1[char] = (out1[char] || 0) + 1;
  }
  for (let char of str2) {
    out2[char] = (out2[char] || 0) + 1;
  }

  //compare the keys and values in both of the objects and make sure they match
  for (let key in out1) {
    if (!(key in out2)) {
      console.log("false");
      return false;
    }
    if (out1[key] !== out2[key]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}

Anagaram("lime", "mile");
Anagaram("butter", "putter");

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}