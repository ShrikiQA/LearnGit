console.log("Task for day 07");

let min_number=1;
let max_number =10;

function guseenumberGame()
{

    const ComputerNumber = Math.floor(Math.random()*10) +1;
    //  console.log("Computer Number "+ ComputerNumber);

    let attempts =0;
    let guess=null

    while(guess !== ComputerNumber)
    {
         const userNumberpromt = prompt("Enter the number 1 to 10");

         if(userNumberpromt >10 && userNumberpromt <1)
         {
            console.log("Incorrect Number you entered, It should be between 1 to 10");
         }

         else if(userNumberpromt > ComputerNumber)
         {
            console.log("Your number is too High!");
            attempts++;
         }
         else if(userNumberpromt < ComputerNumber)
         {
            console.log("Your number is too Low!");
            attempts++;
         }
         else
         {
            console.log("Your Number is correct on "+attempts+" attempt");
            break;
         }
    }

    const playagainPromt = prompt("Do you want to play again yes/no")

    let playagain = playagainPromt ? playagainPromt.toLowerCase() : "no";

    if(playagain === "yes")
    {
        guseenumberGame();
    }
    else{
        console.log("Thank you for Playing, See you soon!!!")
    }
}

guseenumberGame();