let user_score = 0;
let comp_score = 0;

let userChoice;

let choices = document.querySelectorAll(".option");
let message = document.querySelector("#msg");
let user = document.querySelector("#you");
let comp = document.querySelector("#comp");


choices.forEach((option)=>{
    option . addEventListener("click",()=>{
        //userChoice is declared above
        userChoice = option.getAttribute("id");
       //console.log("You clicked this button", userChoice);
        playGame(userChoice);
    });

});

const compSelection = ( ) =>{
    let selection = ["rock", "paper", "scissor"];
    const randChoice = Math.floor((Math.random( )*3));
    return selection[randChoice];
};

const drawGame = (userChoice,compChoice)=>{
    console.log(`Game drawn !  ${userChoice} and  ${compChoice}`);
}

const playGame = (userChoice )=>{

    console.log("you choose", userChoice)
    let compChoice = compSelection();
    console.log("computer choice ", compChoice);

    if (userChoice === compChoice) {
        //console.log("Game drawn !");
        drawGame(userChoice,compChoice);
    }
    else if((userChoice ==="paper" && compChoice === "rock" )||(userChoice ==="scissor" && compChoice === "paper" )|| (userChoice ==="rock" && compChoice === "paper" ))
         {console.log("user win");
    }
    else{
        console.log("computer win");
    }
    showWin(userChoice,compChoice );
};

const showWin = (userChoice,compChoice )=>{

    if ((userChoice ==="paper" && compChoice === "rock" )||(userChoice ==="scissor" && compChoice === "paper" )|| (userChoice ==="rock" && compChoice === "paper" )){
        user_score++;
        user.innerText= user_score;
        message.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else if(userChoice === compChoice){
        drawGame(userChoice,compChoice);
        message.innerText = `Game Drawn!! ${compChoice} and ${userChoice}`;
        message.style.backgroundColor = "blue";

    }
    else{
        comp_score++;
        comp.innerText= comp_score;
        message.innerText = `You Loose!! ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};