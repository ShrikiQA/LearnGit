console.log("Day 07 of JS")

function RockPaperSicssorGame()
{
    console.log("Getting Startedwith the Rock Paper Siccsor Game");

    const userchoicePromt = prompt("Enter Rock Paper Sicssor");

    let userchoice = userchoicePromt.toLowerCase();

    let ComputerChoice;
    
    const randomnumber = Math.floor(Math.random()*3)+1;

    if(randomnumber === 1)
    {
        ComputerChoice = "rock";
    }
    else if(randomnumber === 2)
    {
        ComputerChoice = "paper";
    }
    else if(randomnumber === 3)
    {
        ComputerChoice = "sicssor";
    }

    console.log("User Selected", userchoice);
    console.log("Computer Choice", ComputerChoice);

    if((userchoice === "rock" && ComputerChoice === "sicssor")||(userchoice === "paper" && ComputerChoice === "rock") || (userchoice === "sicssor" && ComputerChoice === "paper"))
    {
        console.log("You user win's, Yah!!!");
    }
    else if(userchoice === ComputerChoice)
    {
        console.log("Match is tie");
    }
    else if((userchoice === "rock" && ComputerChoice === "paper")||(userchoice === "paper" && ComputerChoice === "sicssor") || (userchoice === "sicssor" && ComputerChoice === "rock"))
    {
        console.log("Computer Win's, Yeh!!!");
    }
    else
    {
        console.log("Please Check the input, we didn't understand it");
    }

    const playagainPromt = prompt("Do you want play again, yes?no");

    let playagain = playagainPromt ? playagainPromt.toLowerCase() : "no";

    if(playagain === 'yes')
    {
        RockPaperSicssorGame();
    }
    else{
        console.log("Thanks for playing! See you on next time")
    }
}

RockPaperSicssorGame();