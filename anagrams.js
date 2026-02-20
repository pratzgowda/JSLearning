let str = "CAT";
let input = str.split("");
let count = 0;
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (str[i] == input[j]) {
      count = count + 1;
    }
  }
}
if (count == input.length()) {
  console.log("analog");
}
