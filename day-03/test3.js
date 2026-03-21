console.log("*****Arthmetic Operators *****");

let a =10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(b-a);
console.log(a*b);
console.log(a/b);

let frist_name = "Virat";
let last_name = "kohli";

console.log(frist_name+last_name); // don't use in real time

let x = 12;
let y = 5;

console.log(x**y); // it works like 12 to power of 5 

console.log(x%y) // it will return reminder

console.log("*****Assigment Operators *****");

let m = 10;

console.log(m+=5); // it works m = m+5;
console.log(m-=3); // it works m = m-3;
console.log(m*=2); // it works m = m*2;
console.log(m/=4); // it works m = m/4;

console.log("*****Comperssion Operators *****");

console.log(0 == false); //true
console.log( 3 == '3'); //true

console.log(3 === '3'); //true
console.log(3 === 3); //true

let obj_1 = {'name':'Virat'}
let obj_2 = {'name':'Virat'}

console.log(obj_1 === obj_2); // false, bcz it will comapre the object address not value.

console.log(obj_1== obj_2); //false

console.log(3>4);
console.log(10>4);
console.log(4>=4);
console.log(3<=4);

console.log("*****Logical Operators *****");

//  && 

console.log( false && false); //false
console.log( true && false); //false
console.log( false && true); //false
console.log( true && true); //true

// examples
console.log(4>5 && 4 === 4); //false

// Imporant
console.log("cow" && "Horse"); //Horse, bcz it will validate the first opertor is false or not, if false i will return first one otherwise it will return second one.

//  ||

console.log(false || false); //false
console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true

// example
console.log(4>5 || 4 === 4); //true

// Imporant
console.log("cow" || "Horse"); //Cow, bcz it will validate the first opertor is false or not, if not false i will return first one otherwise it will return second one.


//  ??
// If this first operant is null or undefined it will return the second operand otherwise first operant.

let A1 = null??1; // 1
let B1 = undefined??2 // 2
const C1 = false??4 // false
const D1 = 0??"virat" //0

console.log("*****Conditional Ternary Operators *****");

// syntax 
// condtion ? val1 : val2

//  If the condtion is true it will return first operand otherwise second one.

let age = 23;

console.log(age <= 60 ? "Not Eligible" : "Eligible"); // Not Eligeble

console.log(age >= 60 ? "Not Eligible" : "Eligible"); // Not Eligeble

console.log("*****Group Operators *****");

// same as Bodmans rule.

let p = 1;
let q = 2;
let r = 3;
console.log(p+q*r); // 7, -> 1 + 2 * 3 -> 1 + 6 -> 7
console.log(p+(q*r)); // 7, -> 1 + (2 * 3) -> 1 + (6) -> 7
console.log((p+q)*r); // 9, -> (1 + 2) * 3 -> 3 * 3 -> 9

console.log("*****Typeof Operators *****");

console.log(typeof "Virat") // String

console.log(typeof false) // boolean

console.log(typeof 40) // Numbers

console.log(typeof null) // Object

console.log(typeof undefined) // undefined

let Num = [1,2,3,4]

console.log(typeof Num) //Object


console.log("*****Bitwise Operators *****");

