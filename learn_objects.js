/* object- primitive data type: number,string,boolean,undefined,null, big int; object is a data that holds key-value pair*/
/*key-value pairs*/
/* let laptop = {
  name: "HP",
  model: "victus",
  generation: "i9",
  color: "black",
  price: "1984",
  isTouchscreen: false,
};
console.log(laptop);
console.log(laptop.name);
console.log(laptop["name"]); */

/* let employee = {
  name: "david",
};
console.log(employee); */
/*add new properties*/
/* employee.programming = "Java Script";
employee["id"] = 1234;
console.log(employee); */

/* let employee = {
  name: "david",
  id: 1234,
};
console.log(Object.keys(employee));
console.log(Object.values(employee)); */

/*merging 2 objects*/
/* let person1 = {
  name: "david",
};
person2 = {
  number: 1234,
};
let op = Object.assign(person1, person2);
console.log(op); */

/* wen u merge, same property exists, object gets over ridden*/
/* let person1 = {
  name: "david",
};
person2 = {
  number: 1234,
  name: "pratz",
};
let op = Object.assign(person1, person2);
console.log(op); */

/*nested objects*/
/* let person = {
  name: "david",
  number: "1234",
  address: {
    city: "bangalore",
    area: "rajajinagar",
  },
};
console.log(person); */

/*array of objects*/
/* 4 objects wrapped in a array*/
/*js prg to get iphone mobiles in output*/
/* let response = [
  { brand: "iphone", color: "black" },
  { brand: "samsung", color: "pink" },
  { brand: "oppo", color: "yellow" },
  { brand: "vivo", color: "purple" },
];
let output = [];
for (let i = 0; i < response.length; i++) {
  if (response[i].brand == "iphone") {
    output.push(response[i]);
  }
}
console.log(output); */
/* -data structures and algorithms
-LEETCODE*/
