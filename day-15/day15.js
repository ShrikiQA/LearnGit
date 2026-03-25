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

// Concat Method

const first1 = [1,2,3];
const Second1 = [4,5,6];
const thrid1 = [7,8,9];

console.log(first1.concat(Second1)); //  [1, 2, 3, 4, 5, 6]
console.log(first1.concat(Second1, thrid1)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Join Method

const emotions1 = ['happy', 'sad', 'smile', 'cry'];

console.log(emotions1.join()); // happy,sad,smile,cry

console.log(emotions1.join("<=>")); // happy<=>sad<=>smile<=>cry

// Fill Method 
//this method is used for Overide the elements

const colours = ['red','blue','green'];

colours.fill("pink");

console.log(colours); // ['pink', 'pink', 'pink']

const colours1 = ['red','blue','green'];

colours1.fill("Pink",1,3);
console.log(colours1); // ['red', 'Pink', 'Pink']

const colours2 = ['red','blue','green'];

colours2.fill("Pink",1,2);
console.log(colours2); // ['red', 'Pink', 'green']

// Inculdes Method
// This is used for element is present or not in array

const names2 = ['Tom', 'Jack', 'Cook'];

console.log(names2.includes('Tom')); // True
console.log(names2.includes('tom')); // False
console.log(names2.includes('Test')); // False
console.log(names2.includes(12)); // False

// Index of ()

const names1 = [15, 13, 1, 1000, 12, 99];

console.log(names1.indexOf(13)); // 1
console.log(names1.indexOf(1000)); // 3
console.log(names1.indexOf(15)); // 0

// Reverse Method

const names = ['Tom', 'Alex', 'Bob', 'John'];

console.log(names.reverse()); // ['John', 'Bob', 'Alex', 'Tom']

console.log(names); // ['John', 'Bob', 'Alex', 'Tom']

// Sort Method

const artist = ['John', 'Leo','Charles','Anna', 'Barent'];
console.log(artist.sort()); // ['Anna', 'Barent', 'Charles', 'John', 'Leo']

// For Descending Order

console.log(artist.sort(function(a, b){
    return a ===b ?0: a>b?-1:1;
})); // ['Leo', 'John', 'Charles', 'Barent', 'Anna']

// For Numbers sort method is not work which is why we have to use above method

const numbers = [15, 13, 1, 1000, 12, 99] 

console.log(numbers.sort());//  [1, 1000, 12, 13, 15, 99]

console.log(numbers.sort(function(a, b){
    return a ===b ?0: a>b?-1:1;
})); // [1000, 99, 15, 13, 12, 1]

console.log(numbers.sort(function(a, b){
    return a ===b ?0: a>b?1:-1;
})); //  [1, 12, 13, 15, 99, 1000]

// Splice Method

//Synatx
// splice(start, deletecount, item, item1,...)

const names3 = ['tom', 'alex', 'bob'];

console.log(names3.splice(0,1,"Jack")); // ['tom']

console.log(names3); // ['Jack', 'alex', 'bob']

//EX2:
const names4 = ['tom', 'alex', 'bob'];

console.log(names4.splice(1,0,"Jack")); // []

console.log(names4); //  ['tom', 'Jack', 'alex', 'bob']

//EX3:
const names5 = ['tom', 'alex', 'bob'];

console.log(names5.splice(0,4,"Jack")); // ['tom', 'alex', 'bob']

console.log(names5); // ['Jack']

// At method
//fetch the data based on index both postive and negtive

const junkfood = ['hotdog', 'burger', 'fries','pizza', 'popcorn','sandwitch'];

console.log(junkfood.at(0)); // hotdog
console.log(junkfood.at(3)); // pizza
console.log(junkfood.at(5)); // sandwitch
console.log(junkfood.at(6)); // undefined
console.log(junkfood.at(-1)); // sandwitch
console.log(junkfood.at(-4)); // fries

// Copy with in method

// synatx
// copywithin(target, start, end)

const array = [1,2,3,4,5,6,7];
array.copyWithin(0,3,8);
console.log(array); // [4, 5, 6, 4, 5, 6, 7]

const array1 = [1,2,3,4,5,6,7,8];
array1.copyWithin(2,3,9);
console.log(array1); // [1, 2, 4, 5, 6, 7, 8, 8]

const array2 = [1,2,3,4,5,6,7,8];
array2.copyWithin(2,3);
console.log(array2); // [1, 2, 4, 5, 6, 7, 8, 8]

//Flat Method
// Convert to nested array to flat array

const arr3 = [0,1,2,[3,4]];
console.log(arr3.flat()); // [0, 1, 2, 3, 4]

const arr4 = [0,1,2,[3,[4,5,[6]]]];
console.log(arr4.flat()); // [0, 1, 2, 3, Array(3)]

const arr5 = [0,1,2,[3,[4,5,[6]]]];
console.log(arr5.flat(2)); // [0, 1, 2, 3, 4, 5, Array(1)]

const arr6 = [0,1,2,[3,[4,5,[6]]]];
console.log(arr6.flat(Infinity)); // [0, 1, 2, 3, 4, 5, 6]

// Grouped By Method

const employees = [
    {name : "Tom", dept : "Engg", Sal : 5000},
    {name : "Alex", dept : "HR", Sal : 3000},
    {name : "Ravi", dept : "Engg", Sal : 7000},
    {name : "John", dept : "Engg", Sal : 1000},
    {name : "Bob", dept : "sales", Sal : 6000}
];

const Groupeddept = Object.groupBy(employees, ({dept}) => dept);
console.log(Groupeddept); // {Engg: Array(3), HR: Array(1), sales: Array(1)}

const Groupedsal = Object.groupBy(employees, ({Sal}) => {
    return Sal >=5000 ? "more than 5000" : "Less than 5000"
});
console.log(Groupedsal); // {more than 5000: Array(3), Less than 5000: Array(2)}

// ToRevrese method

const items = [1,2,3,4];

console.log(items.toReversed()); // [4, 3, 2, 1]

console.log(items); // [1, 2, 3, 4]

// To Sorted method

const months = ['Mar', 'Jan', 'Feb', 'Dec'];

console.log(months.toSorted()); // ['Dec', 'Feb', 'Jan', 'Mar']

console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

// To spliced Method

const months1 = ['Jan', 'Mar', 'Apr', 'May'];

console.log(months1.toSpliced(1,0,"Feb")); // ['Jan', 'Feb', 'Mar', 'Apr', 'May']

console.log(months1); // ['Jan', 'Mar', 'Apr', 'May']

// With Method

const numbers1 = [1,2,3,4,5,6];

const newarray = numbers1.with(2, 6);

console.log(newarray); // [1, 2, 6, 4, 5, 6]

console.log(numbers1); // [1, 2, 3, 4, 5, 6]

const newarray1 = numbers1.with(-2, 6);

console.log(newarray1); // [1, 2, 6, 4, 6, 6]

console.log(numbers1); // [1, 2, 3, 4, 5, 6]

const array3 = [1, true, "test", {good : "bad"}, [1,2,3]];
console.log(array3);

