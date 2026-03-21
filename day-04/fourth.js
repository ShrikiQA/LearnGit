console.log("forth day");

let catchball = false ;

if (catchball)
{
    console.log("wicket");
}
else
{
    console.log("Not Out");
}

//let's build a grading system

let score = 69; // if you use if and else condtion if any one of the condtion is true it will break the loop.

if(score>=90)
{
    console.log("Grade A");
}
else if(score>=80)
{
    console.log("Grade B");
}
else if(score>=70)
{
    console.log("Grade C");
}
else if(score<70)
{
    console.log("Grade D");
}

//If you use multiple if condtion if any one of the condtion is true it will not break the loop, it will check all he condition.

let Numbers = 0;

if(Numbers === 0)
{
    console.log("Number is equal to Zero");
}

if(Numbers >= 0)
{
    console.log("Number is greaterthan or equal to Zero");
}

if(Numbers <= 0)
{
    console.log("Number is lesserthan or equal to Zero");
}

// Nested if else

const Name = true;
const sub_name = false;

if(Name)
{
    console.log("outer_if")
    if(sub_name)
    {
         console.log("Inner_if");
    }
    else
    {
        console.log("Inner_else");
    }
}
else{
    console.log("Outer_else");
}

//with if statement we can't create else statement

//Swith case

let test_value = 3;

switch(test_value)
{
    case 1 : console.log("Print1"); break;
    case 2 : console.log("Print2"); break;
    case 3 : console.log("Print3"); break;
    case 4 : console.log("Print4"); break;
    default : console.log("Nothing Found");
}

let IPL_Name = "CSK" ;

switch(IPL_Name)
{
    case "RCB" : console.log("Royal Chanllengers Bangalore"); break;
    case "MI" : console.log("Mumbai Indians"); break;
    default  : console.log("BAN");
}


let city = "Pune";

switch(city)
{
    case "Bangalore":
    case "Kolkata":
    case "Goa":
        console.log("Indian"); break;
    case "Pune": 
        default : console.log("Indian 2");


}