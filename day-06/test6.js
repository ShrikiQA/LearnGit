console.log("Sixith Day");

//define or declare a function

function letme()
{
    console.log("Calling Letme Function");
}

letme();

let printme = function()
{
    console.log("print me");
}

console.log(printme());

function sumadd(a, b)
{
    // console.log(a+b);
    return (a+b); 
}
console.log(sumadd(4, 5));
console.log("********************")



// default Parameters

function clac(a=0, b=0)
{
    return (2*(a+b));
}

console.log(clac(2,7));

//Rest Parameter

function calculateThis(x, y, ...rest)
{
    console.log(x, y, rest);
}
calculateThis(1, 2, 3, 4, 5, 6);


//Nested Parameter

function outer()
{
    console.log("Outer");

    function inner()
    {
        console.log("Inner");
    }

    inner();
}

outer();

function outer1()
{
    console.log("Outer1");

    return function inner1()
    {
        console.log("Inner1");
    }
    
}

// let RetVal = outer1();
console.log("**************************")
console.log(outer1());
console.log("**************")
console.log(outer1()());

//call back function

// EX1
function foo(func)
{
    console.log("foo");
    func();
}

 foo(function ()
{
    console.log("Tes Func");
}
 )

// EX2

const callbuz = true;

function foo1(func)
{
    console.log(callbuz);
    if(callbuz)
{
        console.log("**********************");
        func();
}   
}

foo1(function()
{
    console.log("test 2");
})

// Pure Function

// EX1:
function greeting(name)
{
    return "Hello " + name;
}

console.log(greeting("Test Pure Function"));

// EX2:

let hello = "Hello ";

function greeting1(name)
{
    return hello + name;
}

console.log(greeting1("Test Pure Function"))

hello = "Hiii ";

console.log(greeting1("Test Pure Function"))

//  Higher Order Function.

// ex:

function getcamera(camera)
{
    camera();
}

getcamera(function()
{
    console.log("Sony");
})

// Ex2:

function returnFun()
{
    return function()
    {
        console.log("Test Sony");
    }
}

console.log(returnFun()());


// Arrow Function

function greetme1()
{
    console.log("Hello")
}

greetme1();

let greetme = () => {
    console.log("hello");
}


//IIFE (Immediately Invoked Function Expression)

// EX:
(function()
{
    console.log("IIFC ")
})()

// EX2:
// (function(NUM)
// {
//     console.log("IIFC "+NUM)
// })(3)

// Recursion

console.log("************************************")

function freshwater(NUM3)
{
    if(NUM3 ===0)
    {
        console.log("Water Over")
        return;
    }
    console.log("Fresh Water "+NUM3)

    freshwater(NUM3 - 1);
}

freshwater(3)
