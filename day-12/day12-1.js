
// Object Destructuring

console.log("Day12 Part-2");

const student = {
    'name' : 'Virat',
    'name1': 'Dhoni',
    'age' : 9,
    'std' : 3,
    'subjects' : ['maths', 'English', 'EVS'],
    'parents' : {
        'father' : 'Kohli',
        'mother' : 'rani',
        'email' : 'virat@gmail.com'
    },
    'address' : {
        'city' : 'Bangalore',
        'street' : 'near chinnasway ground',
        'state' : 'Karanatka',
        'Country' : 'India',
        'Zip' : 560043
    }
}

// const name = student.name;
// const city = student.address.city;
// console.log(name, city); // This is length process, which is why we are using Destructuring.

const {name, age, address} = student;

console.log(name); //Virat
console.log(age); // 9
console.log(address);

const {city} = student.address;

console.log(city);

//Case-1
// here we can add variable 

const {name1, meal="Bread"} = student;

console.log(name1, age, meal); // Dhoni 9 Bread

//Case-2
// Here can  new variable with dynamic value

const {subjects, noofsubjects = subjects.length} = student;

console.log(noofsubjects); //3

//Case-3
// Here we can add aliases but the problem is you have to use alias name only not variable decleared name.

const {std : Standard} = student;

console.log(Standard); //3
// console.log(std); // Uncaught ReferenceError

// Case-4
// how to use nested variable

const {address : {Zip, state}} = student;

console.log(Zip);
console.log(state);

//Case-5

function sendmail({parents:{email}}) {

     console.log(`${email}`);
}

sendmail(student);// virat@gmail.com

//case6
const getstudent = () =>
{
    return {
        'name' : 'john',
        'age': 10,
        'Subjects' : ['maths', 'English', 'Science']
    };
}

const {name : anothername, Subjects: anothersubjects} = getstudent();

console.log(anothername, anothersubjects);

//Case-7
// Destructuring within the loop

const student1 = [
    {
        'Name': 'virat',
        'Grade' : 'A+'
    },
    {
        'Name' : 'Dhoni',
        'Grade' : 'A',
    },
    {
        'Name' : 'Rahul',
        'Grade' : 'A'
    }
];

for ( {Name, Grade} of student1)
{
    console.log(Name, Grade); //
}

//Optional Chaning

console.log("Optinal Chaining");

const emp = {
    'salary' : 100
}

console.log(emp.salary);
console.log(emp.department);
// console.log(emp.department.name); // Error

const name10 = emp.department?.name; // to handle this error, we use optinal chaning.
console.log(name10); //Undefined.