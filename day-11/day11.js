console.log("Welcome come to Day 11");


//Closure

function outer()
{
    let x=10;
    return function inner()
    {
        console.log(x);
    }
}

const func = outer();

console.log(func());


//EX2

function outercount()
{
    let count =0;
    return function innercount()
    {
        count++;
        console.log(count);
    }
}

const test1 = outercount();

console.log(test1());


//Real Time Example

// function createBankAccount(initalBalance)
// {
//     let Balance = Balance + initalBalance;
//     return
//     {
//         "Deposit": (amount) =>
//         {
//             Balance = Balance + amount;
//             console.log("Deposited", amount, "Current Balance", Balance);
//         },

//         "Withdraw" :  (amount) =>
//         {
//             if(amount > Balance)
//             {
//                 console.warn("Insuffcient Balance");
//             }
//             else
//             {
//             Balance = Balance - amount;
//             console.log("Deposited", amount, "Current Balance", Balance);
//             }
//         },

//         "CheckBalance" : () =>
//         {
//             console.log("Current Balance", Balance);
//         }
        
//     }
// }

const Account = createBankAccount(100);

