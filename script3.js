//ex1
const checkAge = (age) =>
  age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
checkAge(20);
checkAge(16);

//ex2
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
alert(pow(3, 2)); // 9
alert(pow(3, 3)); // 27
alert(pow(1, 100)); // 1

//ex
const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//ex4
let calculator = {
  read() {
    this.a = +prompt("Enter the first number:", 0);
    this.b = +prompt("Enter the second number:", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
//ex5
const min = (a, b) => (a < b ? a : b);
console.log(min(2.3));
