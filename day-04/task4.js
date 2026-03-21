console.log("Task Day 04");

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

//task 2

let cash_man=10100;
let atm_cash = 100;

if(cash_man%100 ===0)
{
   console.log("Withdrawal successful")
}
else
{
    console.log("Invalid amount");
}

// task 4


let age = 60;

if(age<18)
{
    console.log("Ticket Price is $3");
}
else if(age>=18 && age <=60)
{
   console.log("Ticket Price is $10");
}
else if(age>60)
{
    console.log("Ticket price is $8");
}

// task  5

let month = "March and April";

switch(month)
{
    case "March and April" : console.log("Aries") 
    break;
    case "April and May" : console.log("Taurus") 
    break;
    default : console.log("No Found");
}

//6

let Triangle = 1;

switch(Triangle)
{

    case 2 : console.log("Equilateral Triangle")
    break;
    case 3 : console.log("Isosceles Triangle")
    break;
    default : console.log("Scalene Triangle")
}

