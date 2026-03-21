"use strict";

console.log("Welcome to Day13");

//This Keyword

console.log(this); // Window Object //Global Scope

// This Keyword inside the Object  or //Implict Binding

const employee = {
    id : "A7758",
    fname:"Virat",
    lname:"Kohli",
    returnthis: function()
    {
        return this;
    },

    getfullname : function()
    {
        return `${this.fname} ${this.lname}` 
    }
}

console.log("Employe ID", employee.id);

console.log("This inside the employee Object", employee.returnthis()); //{id: 'A7758', fname: 'Virat', lname: 'Kohli', returnthis: ƒ, getfullname: ƒ}

console.log(employee.getfullname()); 

// EX2:

const cat ={
    name:"tom",
    age :7
}

const mouse ={
    name:"Jerry",
    age :4
}

function greetme(obj)
{
    obj.logmessage = function()
    {
        console.log(`${this.name} is ${this.age} year old!`)
    }

    console.log(obj); 
}

greetme(cat);
cat.logmessage();

greetme(mouse);
mouse.logmessage();  

// This keyword in the function without Object

// EX1:
function sayname()
{
    console.log("This inside a function", this);
}
sayname();

// EX2

function outer(a)
{
    console.log("The outer function", this);

     return function inner(b)
    {
         console.log("The ineer function", this);
    }
}

const outerfun = outer(5);
 outerfun(7);
 
// This keyword inside an arrow function 

const getfood = () => this;
console.log(getfood()); //Window Object

const food ={
    name:"mango",
    colour:"yellow",
    getdesc:()=> `${this.name}is ${this.colour}` 
}

console.log(food.getdesc()); //Undefined

console.log("****************************")

const food1 ={
    name1:"mango",
    colour1:"yellow",
    getdesc1 : function () {
    return ()=> `${this.name1} is ${this.colour1}` 
    }
}

const returnFun = food1.getdesc1();
console.log(returnFun());

// Explict Wait

// 1 Call Method

function greeting ()
{
    console.log(`helloo, ${this.name} belongs to ${this.address}`);
}

const user = {
    name : 'tapas',
    address:'bangalore'
}

greeting.call(user);

// If parameter is present

function greeting1 (hobby1, hobby2)
{
    console.log(this.name2+" likes "+ hobby1 +" "+hobby2);
}

const user1 = {
    name2 : 'tapas',
    address2:'bangalore'
}

greeting1.call(user1, "Criket", "Football");

//2 Apply Method
// If user have more parameter need to pass thrn we have to go for apply method

function greeting3 (hobby1, hobby2)
{
    console.log(this.name3+" likes "+ hobby1 +" "+hobby2);
}

const user3 = {
    name3 : 'tapas',
    address3:'bangalore'
}

const paradata = ["Batmiton", "Swimming "] 

greeting3.apply(user3, paradata);

// Bind Method

function greeting4 (hobby1, hobby2)
{
    console.log(this.name4+" likes "+ hobby1 +" "+hobby2);
}

const user4 = {
    name4 : 'tapas',
    address4:'bangalore'
}

// greeting4.bind(user4, "Tennies", "Basketball"); //It doesn't work in bind method

const bindcall = greeting4.bind(user4, "Tennies", "Basketball");
bindcall();

// The New Keyword & this keyword

const cartoon = function(name5, animal)
{
    this.name5 = name5;
    this.animal = animal;
    this.log = function()
    {
        console.log(this.name5+" is a "+this.animal);
    }
}

const tom = new cartoon("Tome", "Patanagere shed");
tom.log();


// Interview Questions POV

// 1
const user6 = {
 
    name6 : "Virat",
    greet : function ()
    {
        const inner = () =>
        {
            console.log(`Hello, ${this.name6}`);
        }

        inner();
    }

}

user6.greet();

// 2

const obj2 = {
    name7 : "John",
    greet2: function()
    {
        console.log(`hello, ${this.name7}`);
    }
}

// const callobj1 = obj2.greet2;
// callobj1.call(obj2);

obj2.greet2();


