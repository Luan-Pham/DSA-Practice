//reverse a string

function reverse(string) {
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  console.log(output);
  return output;
}

const string1 = 'hellothere';
const string2 = 'winter is coming';

reverse('hellothere');
reverse(string2);
