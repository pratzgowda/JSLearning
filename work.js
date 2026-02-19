/* let char = "*";
let i = 0;
for (let j = 1; j <= 5; j++) {
  console.log(char.repeat(j));
}
console.log(" "); */

char1 = " ";
char2 = "*";
for (let j = 4; j <= 0; j--) {
  for (let i = 1; i <= 4; i++) {
    console.log(char1.repeat(j) + char2.repeat(i));
  }
}
