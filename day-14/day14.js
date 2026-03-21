console.log("Welcome to day14");

// Error Handling

// console.log(x); // Uncaught ReferenceError

let obj = null;
// console.log(obj.name); //Uncaught TypeError: Cannot read properties of null (reading 'name')

// console.log("HI" //Uncaught SyntaxError: missing ) after argument list

// let arr = new Array(-1); //day14.js:12 Uncaught RangeError: Invalid array length

//EX:

try{
    console.log("Execution starts here");
    abc;
    console.log("Execution Ends here");
}
catch(error)
{
    console.error(error.message);
    console.error(error.name);
    console.error("An error occured")
    console.error(error);
}

// Real world use cases

// EX1:
function divideby(a, b)
{
    try{
        if(b===0)
        {
            throw new Error("B value should not be zero");
        }
        return console.log("The divided value is "+ a/b);
    }catch(error)
    {
       console.log(error.message);
    }
}
divideby(4, 2);
divideby(2,0);

// EX2:

const person = {
    name : "tapas",
    address : {
        city :"Bangalore"
    }
}

function getpostcosde (user){
try{
   console.log(user.address.country.postcode);
}
catch(error)
{
    console.error(error.message);
}
}
getpostcosde(person);

// EX3:
function validage (age)
{
    try{
        if(isNaN(age))
        {
            throw new Error("Please Enter the valid data, This data is "+age+" not in number");
        }
        return console.log(`User Age is: ${age}`);
    }
    catch(error)
    {
        console.error(error.message);
    }
}
validage(30);
validage("Dhoni")

// Re-Throw

function validateform(formdata)
{
    try{
        if(!formdata.username)
            throw new Error("User Name is Mandatory");
        if(!formdata.email.includes("@"))
        {
            throw new Error("Email should be valid format");
        }

        return console.log("Thanks for form submitting")
    }
    catch(error) {
        console.log(error.message);
        throw error;
    }
}

try{
  validateform({username:"Virat", email:"test"});
}
catch(error){
    console.log(error.message);
}

// Finally
// Finallu will excuted at any condition.