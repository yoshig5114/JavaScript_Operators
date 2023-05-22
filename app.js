console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;
console.log(add, minus, multiply, dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

let e2p1 = num + str;
let e2p2 = num + str2;
let e2p3 = num + isPresent;
let e2p4 = firstName + num;
let e2p5 = isPresent + str;
let e2p6 = firstName + lastName;
console.log(e2p1, e2p2, e2p3, e2p4, e2p5, e2p6);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

let e3p1 = val == str3;
let e3p2 = val === str3;
let e3p3 = !isPresent2;
let e3p4 = 'eleven' == str4 && val >= str3;
let e3p5 = !isPresent2 || isPresent2;
let e3p6 = 0 == false;
let e3p7 = 0 === false;
let e3p8 = 0 != false;
let e3p9 = 0 !== false;
console.log(e3p1, e3p2, e3p3, e3p4, e3p5, e3p6, e3p7, e3p8, e3p9);

