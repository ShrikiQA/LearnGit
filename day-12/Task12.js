console.log("Task for day 12");

// Q1
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); //Not Provided

// Q2
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); //1

// Q3 Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person1 = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company:{name: companyName, location: {city}}} = person1;

console.log(name);
console.log(companyName);
console.log(city);

//Q4 Build a Student Management System
//  1. Store student details in an object (name, age, grades).
//  2. Implement a method to calculate the average grade

const student = {
  name1 : 'shriki',
  age : 26,
  grade : [80,70, 87, 89, 67]
}

const {name1, grade, noofgrade = grade.length} = student;

let sum =0;
for(let i=0; i<noofgrade; i++)
{
   sum = sum + student.grade[i];
}

console.log(sum);

const AvgGrade = sum/noofgrade;

console.log(name1, AvgGrade);

// Q8 What will be the output and why?

const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); //Doe

// Q6  What is the difference between Object.keys() and Object.entries()? Explain with examples
//  Object.key() => It will print the keys of the objects
// Objects.entries() => It will returns an array of key-value pairs, where each pair is represented as an array [key, value].

// Q10 Loop and print values using Object destructuiring

const users = [
  {
      'name2': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name2': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name2': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for({name2, address, age} of users)
{
  console.log("Name ="+name2,", Address ="+address,", Age ="+age);
}


// Q5 Book Store Inventory System
// i) Store books in an object.
// ii) Add functionality to check availability and restock books.

const Books = {
    English: true,
    Kannada: false,
    Hindi: true
};

const keys = Object.keys(Books);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    if (Books[key] === false) {
        console.log(key + " needs to be store");
    }
}


