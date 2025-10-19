//ex1
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
alert(filtered);
console.log(arr);
alert(arr);

//ex2
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
let names = users.map((user) => user.name);
console.log(names);
alert(names);

//ex3
function getAverageAge(users) {
  let total = users.reduce((sum, user) => sum + user.age, 0);
  let average = total / users.length;
  let ageList = users.map((user) => user.age).join(" + ");
  return (arr = [`(${ageList}) / ${users.length} = ${average}`]);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr));
