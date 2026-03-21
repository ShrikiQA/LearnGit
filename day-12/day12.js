console.log("Day 12");


let user = {

name : "Virat",
age : 38,

"is Team" : "India" // If you are using special char you have menation key in double quotes.
}

console.log(user);
console.log(user.name);
console.log(user.age);

user.surname = "Kohli"; // adding the key for the object
console.log(user);

// console.log(user.is Team);// Error

console.log(user["is Team"]); // for special char key we have write like this

user["Role"] = "Batsman"; // Adding Special char keys

user.colour = "White";

console.log(user);

delete user.colour; // Delete the object key

console.log(user);

user.age = 39; // We can reintizal the key value

console.log(user);

const someage = "age";

console.log(user[someage]); // 39 // We can take the the key value

// We give key vaule as dynamic also 
// const car = prompt("Which is your car name");

// let carname = {

//     [car] : 5 // Dynamic value will store in the key.
// }

// console.log(carname);

// Constructor 

function carBrand (brandname, modelname)
{
    this.brandname = brandname,
    this.modelname = modelname
}

const Audi = new carBrand("Audi", "A9");
console.log(Audi);
const BMW = new carBrand("BMW", "X1");
console.log(BMW);

console.log(BMW instanceof carBrand); // True // It will check BMW is presnt in the CarBrand Object or not.

// Factory 
 function createuser1(name1, age1) {
    return {
        name1, //It will create internally 
        age1,
        greet() {
            console.log(this.name1);
        }
    };
}
 const Testuser = createuser1("Dhoni", 42);
 console.log(Testuser);
 console.log(Testuser.age1);
 Testuser.greet();
 console.log("**************************");

 //EX

 let profile = {
    name2 : "Virat",
    company2 : "BCCI",
    message : function()
    {
        console.log(`${this.name2} works at ${this.company2}`);
    },
    address : {
        city: "Bangalore",
        pin : 566034,
        state : "Kar",
        country : "IND",
        greeting : function()
        {
            console.log("Welcome to India")
        }
    }

 }

console.log(profile.name2);
console.log(profile.company2);
 profile.message();

 console.log(profile.address.city);

  console.log(profile.address.country);

  profile.address.greeting();

  console.log(profile.sal);
 let test12 = "sal" in profile; //Imporant

  console.log(test12);
  if(!test12)
  {
    console.log("The Sal Property is not exist")
  }

  //print all the keys

  for(let key in profile)
  {
    console.log(key);
  }

  //print all the key vaules
  for(let key in profile)
  {
    console.log(profile[key]);
  }

console.log("*********************************")

  console.log(Object.keys(profile)); // It will print object key values in array format

  //Object Refrence 

  let fruit  = 
  {
    Fruitname : "Mango" 
  }

  const onemorefruit = { Fruitname : "Mango"};

  console.log(fruit == onemorefruit); // False
  console.log(fruit === onemorefruit); // False // It will compare object address not value.

  fruit = onemorefruit;

  console.log("***********************************");

  console.log(fruit == onemorefruit); // True
  console.log(fruit === onemorefruit); // True


  //Static Method

  const target = {p:1, q:3};
  const source = {a:4, b:6};

  const retrunedObj = Object.assign(target, source); //It will pass the data to soruce to target 
  console.log(retrunedObj);// {p: 1, q: 3, a: 4, b: 6}

  const target1 = {p:1, a:3};
  const source1 = {a:4, b:6};

  const retrunedObj1 = Object.assign(target1, source1); //It will over the a data.
  console.log(retrunedObj1); //{p: 1, a: 4, b: 6}

  //EX3:
  const obj = {name : "Tapascript"};
  const obj2 = Object.assign({}, obj); //{} -> empty Object

  console.log(obj2); // {name: 'Tapascript'}

  console.log(obj2 === obj); // false

  //EX4:

  const obj3 ={
    a:1,
    b: { c:4}
  }

  const obj4 = Object.assign({}, obj3);

  console.log(obj4);

  obj4.a = 10;

  console.log("Object Assign");
   console.log(obj4); // a = 10
   console.log(obj3); // a = 1

  obj4.b.c = 20;

   console.log(obj4); // c = 20
   console.log(obj3); // c = 20 // In Object.Assign if you updated nested variable it will updated linked object varibales not for non nested variables.

// EX5

 const obj5 = {
    a:10,
    b: {c:20}
 }

 const obj6 = structuredClone(obj5);

 obj6.a = 100;
 obj6.b.c = 200;

console.log("StructuredClone"); 
console.log(obj6.a); // 100
console.log(obj5.a); //10

console.log(obj6.b.c); // 200
console.log(obj5.b.c); //10 // c = 20 // In StructuredClone if you updated nested variable it will not updated linked object varibales and non nested variables.
 
// Object convert to Array in both key and value
 const myjob = {
    a:"tapas",
    b:30
 }

 console.log(Object.entries(myjob));

 // Array convert to Object
 const myjob1 = ([["foo", "bar"],
    ["baz", 42],]
 )

 console.log(Object.fromEntries(myjob1));

 // Freeze

 //Imutable -> Something that you can't change

 const emp ={
    sal:100
 }
 Object.freeze(emp);

 emp.sal = 200;

 console.log("Freeze");

 emp.role = "QA";

 console.log(emp) //100 // In Freeze, you can't add & delete the variable and can't override the variables.

console.log(Object.isFrozen(emp)); //true // It will emp object is frozen or not

// Seal

 const emp1 ={
    sal1:100
 }
 Object.seal(emp1);

 emp1.sal1 = 200;

 console.log("Seal");

 emp1.role = "QA";

 console.log(emp1) //200 // In Freeze, you can't add & delete the variable but you can override the variables.

console.log(Object.isSealed(emp1)); //true // It will emp object is Sealed or not





