/*push add element to tail end of array,it is most commonly used method
 ;pop remove elemnet from array
 unshift-push
 shift-pop*/
/* let arr = ["india", "srilanka"];
console.log(arr);
arr.push("australia");
console.log(arr);
arr.pop("australia");
console.log(arr);
arr.unshift("zimbambwe");
console.log(arr);
arr.shift();
console.log(arr);
 */
/* let arr = ["a", "z", "e", "b", "h"];
console.log(arr);
console.log(arr.sort());
console.log(arr.sort().reverse());
console.log(arr.join(""));
 */

/* let arr=[1,2,3,4,5,6];
final=7;
output=[[0,5],[1,4],[2,3]]; */
/* 
let arr = [1, 2, 3, 4, 5, 6];
let final = 7;
let output = [];
for (let j = 0; j < arr.length; j++)
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] + arr[j] == final) {
      output.push([arr[i], arr[j]]);

    }
  }
console.log(output); */

/*palindrome*/
/* let input = "madam";
let x = "";
rev = "";
let str = input.split("");
for (let i = 0; i < str.length; i++) {
  rev = rev + str[i];
  x = str.join("");
  if (rev == x) {
    console.log("palindrome");
  }
} */

/* let str = "madam";
let op = str.split("").reverse().join("");
if (str == op) {
  console.log("palindrome");
}
 */

/* let arr = ["david", 28, false];
console.log(arr); */
