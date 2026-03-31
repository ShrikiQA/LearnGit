//04  Use the for loop on the above array to print elements in the odd index.

console.log("Welcome to task for day 15");

const salad = ["tomato", "mushroom", "brolie","carrot"];

for(let i=0;i<salad.length;i++)
{
    if(i%2==1)
    {
        console.log(salad[i]);
    }
}

//01 Create an array of 5 elements using the Array Constructor.

const arr1 = new Array(1,2,3,4,5);
console.log(arr1);

// 02 Create an array of 3 empty slots.

const arr2 = [ , , , ];
console.log(arr2);

//03 Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const arr3 = ["A", "B", "C", "D", "E", "F"];

console.log(arr3[arr3.length-3]); // D

// 05 Add one element at the front and the end of an array.

const arr5 = ["B", "C", "D"];
arr5.push("E");// End
arr5.unshift("A"); // Front
console.log(arr5); // ['A', 'B', 'C', 'D', 'E']

// 06 Remove an element from the front and the end of an array.

const arr6 = ['A', 'B', 'C', 'D', 'E'];
arr6.pop("A"); // Front
arr6.shift("E"); // End
console.log(arr6); // 