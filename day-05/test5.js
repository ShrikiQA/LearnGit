console.log("Fivth Day")

//for loop
// A for llop is best when we know exactly how many times we need to run a block of code.

// syntax : for(initialization; condition; update)
// {
//    code
// }

for(let count=1; count<=5; count++)
{
    console.log("Number "+ count);
}

// EX2
let sum=0;

for(let i = 0; i<5 ; i++)

    {
   
    if(i%2===0)
    {
        console.log("Even Number "+ i);

          sum = sum +i;
    }
}
console.log(sum);   

// EX3
let name1 = "JavaScprit";

for(let j=0 ; j<name1.length; j++)
{
    console.log(name1.charAt(j));
}

// Ex4

for(let x=10;x>=0;x--)
{
    if(x===6)
    {
        break;
    }
    else{
        console.log(x);
    }
}


// While Loop

// Syntax
// while(condition)
// {
//      code
// }


let con = 1;

while(con <5)
{
   console.log("While Number "+con);
   con++;
}

// Do While Loop

// Syntax
// do{
//    code
// }
//  while(conition)

let num =1;

do{
    console.log("DO While Loop "+num);
    num++
}
while(num<=5)