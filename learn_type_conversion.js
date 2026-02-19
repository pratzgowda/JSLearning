//implicit and explicit type conversion//
let value = 5 + 3;
console.log(value);

let value1 = 5 + "3";
console.log(value1);

// string converted to number: outpu=2//
let value2 = 5 - "3";
console.log(value2);

let value3 = 5 * "3";
console.log(value3);

let value4 = 5 / "3";
console.log(value4);

let value5 = 5 * "3";
console.log(value5);

let value6 = 5 ** "3";
console.log(value6);
// mathematical expression + - * / % //

//add and concatinate string, if u concatinate anythng wid string, it becomes a string on right//
let data = 1 + 2 + "abcd" + 1 + 2;
console.log(data);

let value7 = 1 + 2 + 3 + "abcd";
console.log(value7);

let value8 = 1 + true;
console.log(value8); //1+true=2//
console.log(1 / 0); // gets displayed as NaN NOT A NUMBER or INFINITY//

let value10 = 1234;
console.log(value10);

let value11 = String(1234);
console.log(value11);

let value12 = Boolean("1234");
console.log(value12);

let value13 = Boolean("");
console.log(value13);
//explicit conversion//
let value14 = Number("1234");
console.log(value14);
