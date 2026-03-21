"use strict";
console.log("Task for Day 13");


// Q2 What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  greet: function ()
  {
    return () => {
        console.log(`Hello, ${this.name}!`);
    }
  }
}
const retcall = user.greet();
retcall();

// Q3 Can you explain what is the problem here and fix the issue to log the correct name?

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn.call(obj);

// Q What is the problem with the following code? Why isn't it logging the name correctly?

const user1 = {
  name1: "Alex",
  greet1: function () 
  {
    const inner = () =>
    {
      console.log(`Hello, ${this.name1}!`);
    }
    inner();
  },
};
user1.greet1();

// Q6 Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.apply(car2);

// Q7 What will be the output of the following code and why?

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello(); // Charlie
person.sayHelloArrow();  // Bcz it is arrow function it will call the parent function.

// Q5  Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function sports(name, noofplayer) 
{
    this.name = name;
    this.noofplayer = noofplayer;
    this.callfunc = function ()
    {
        console.log(this.name+" "+this.noofplayer);
    }
}

const cricket = new sports("cricket", 11);
cricket.callfunc();

const football = new sports("Football", 12);
football.callfunc();




