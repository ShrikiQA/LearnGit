console.log("Welcome to Day 10");

//Global Scope

let name ="Virat";

function test()
{
    console.log(name);
}

test();


//Function Scope

function todo()
{
    var task = "I'm Tester";
    console.log(task); // I'm Tester
}

todo();
// console.log(task); //Refernce Error

//Block Scope

{
    var count = 10;
    console.log(count);//10
}
console.log(count); //10

{
    let count1 = 10;
    console.log(count1); //10
}
// console.log(count1); // Refernce Error

// Example 1

var test1 =100;

function outer()
{
    var test1 = 200;
    console.log(test1);

    function inner()
    {
        var test1 = 300;
        console.log(test1);
    }

    inner();
}

outer();
console.log(test1);


// Example 2

for(var i =0 ; i<5;i++) //var
{
    console.log(i); // 0,1,2,3,4
}
    console.log(i); //5

for(let j =0 ; j<5;j++) //let
{
    console.log(j);
}
    // console.log(j);  // Refrence Error




