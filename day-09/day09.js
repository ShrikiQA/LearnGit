console.log("Welcome to Day 09");

// Varibale for Var
console.log('Name is ', name);
var name = "Tom";
name ='Tom';
console.log('Name is ', name);

//Varibale for Let and Const
// console.log('Name is ', name1);
// let name1;                                  //Error (Same for Const)
// name1 ='Tom';
// console.log('Name is ', name1);

console.log("*******************************************************");


//Function

chase();

function chase()
{
    console.log("Tom chasing the Jerry");

    caught();                         // It will Exciuted
}

function caught()
{
    console.log("Tom caught Jerry:(");
}


console.log("****************************************************************")

test();

var test = function()
{
    console.log("Test Excuted");   //Error
}