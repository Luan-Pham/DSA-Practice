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
