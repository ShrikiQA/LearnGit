console.log("Welcome to day 15");

// Array 

const salad = ["tomato", "mushroom", "brolie","carrot"];

const anotersalad = new Array("tomato", "mushroom", "brolie","carrot");

console.log("Salad", salad);
console.log("another Salad", anotersalad);

console.log(salad === anotersalad) // False

const two = new Array(2);
console.log(two); //(2) [empty × 2] // It will take length count

const three  = new Array(1,2);
console.log(three); // (2) [1, 2]

// Fetch the array data based on index

console.log(salad[0]); // tomato
console.log(salad[1]);// mushroom 
console.log(salad[2]); // brolie

// using loop

for (let i=0; i<salad.length;i++)
{
    console.log("The index of "+i+" the value is "+salad[i]);
}

// Adding elements in array

// Push Method // This method use to add the element in the array at the end

const pushtret = salad.push("Peanats");
console.log(salad); // ['tomato', 'mushroom', 'brolie', 'carrot', 'Peanats']
console.log(pushtret); // 5 

// Unshift // This method use to add the element in the array at the start

const Unshiftret = salad.unshift("onion");
console.log(salad); // ['onion', 'tomato', 'mushroom', 'brolie', 'carrot', 'Peanats']
console.log(Unshiftret); // 6

// Removing elements in array

// Pop Method // This method use to remove the element in the array at the end

const Popret = salad.pop("Peanats");
console.log(salad); // ['onion','tomato', 'mushroom', 'brolie', 'carrot']
console.log(Popret); // Peanats

// Shift Method // This method use to remove the element in the array at the start

const Shiftret = salad.shift("Peanats");
console.log(salad); // ['tomato', 'mushroom', 'brolie', 'carrot']
console.log(Shiftret); // Onion

// Copy one array to another array

// Slice Method

const saladcopy = salad.slice();

console.log("salad copy", saladcopy);

// Is Array // It will check is it array or not

Array.isArray(["First","Second","Thrid"]); //True
Array.isArray("tomato"); //False
Array.isArray({tomato : "Key"}); //False
Array.isArray([]); // True

// Destructing Array

//  const tomatos = salad[0];
//  const mushrooms = salad[1];
//  const brolies = salad[2];

//  instead of 

const [tomatos, mushrooms, brolies] = ["Tomato", "Mushroom", "Broclie"];

console.log(tomatos, mushrooms, brolies); // Tomato Mushroom Broclie

// Assigning Default Values

const [tomatos1, mushrooms1="Mushroom"] = ["Tomato"];

console.log(tomatos1, mushrooms1);// Tomato Mushroom

//Skiping Values

const [tomato2, ,carrot2] = ["Tomato", "Mushroom", "Carrot"];

console.log(tomato2, carrot2); //Tomato Carrot

// Nested Array

// EX: [1, 2, 3 [4, 5, 6 [7, 8]]];

let fruits = ['Lemon', 'Pineapple', 'Banana', 'Watermelon', ['Tomato', 'Mushroom', 'Carrot']];

let veg = fruits[4]
console.log(veg); // ['Tomato', 'Mushroom', 'Carrot']
// Find oly the carrot
let carrot3 = veg[2];
console.log(carrot3); // Carrot

// OR

let carrotveg = fruits[4][2];
console.log(carrotveg);// Carrot

// Nested Array Destructuring

let [, , , ,[, , carrot4]] = ['Lemon', 'Pineapple', 'Banana', 'Watermelon', ['Tomato', 'Mushroom', 'Carrot']];
console.log(carrot4); // Carrot

// Rest Parameter & Spread Parameter

// Rest Parameter

const [tomato5, mushroom5, ...Rest] = ['Tomato', 'Mushroom', 'Carrot', 'Broclie', 'Onion'];

console.log(Rest); // ['Carrot', 'Broclie', 'Onion']

// Sperad Parameter

const mysalad = ['Tomato', 'Mushroom', 'Carrot', 'Broclie', 'Onion'];

const copymysalad = [...mysalad];
console.log("copymysalad", copymysalad); // ['Tomato', 'Mushroom', 'Carrot', 'Broclie', 'Onion']

console.log(copymysalad ===  mysalad); // False

// Destructuring Use Cases

// Swaping

let first = "Sad";
let Second = "Happy";

[first, Second] = ["Happy", "Sad"];

console.log(first); // Happy
console.log(Second); // Sad

// Merge 

const emotions = ['Happy', 'Sad'];
const veg1 = ['Tomato', 'Mushroom', 'Carrot', 'Broclie', 'Onion'];

const emotionvegs = [...emotions, ...veg1];

console.log(emotionvegs); // ['Happy', 'Sad', 'Tomato', 'Mushroom', 'Carrot', 'Broclie', 'Onion']

// Array Length 

let arr1 = [11, 21, 45];
const arr2 = new Array(7);

console.log(arr1); // 3
console.log(arr2); // 7

arr1.length = 2;
console.log(arr1); // [11, 21] // It will delete last data or element

// Maximum length of the array is 2 ** 256 -1 = 4292967295

// arr1.length = 2**256;
// console.log(arr1); // day15.js:173 Uncaught RangeError 

arr1.length = 0;
console.log(arr1);

arr1 = [11, 21, 45];

arr1.length = 7;
console.log(arr1);