

function computerPlay(){
    // Generate random number between 1 and 3 inclusive
    min = Math.ceil(1);
    max = Math.floor(3);
    let selection = Math.floor(Math.random() * (max - min + 1) + min)
    let computerSelection; 
    if( selection== 1){
        computerSelection = "ROCK"; 
        console.log(computerSelection); 
        return computerSelection; 
    }
    else if(selection ==2){
        selection = "PAPER";
        console.log(selection); 
        return computerSelection; 
    }else if(selection ==3){
        computerSelection="SCISSORS";
        console.log(computerSelection); 
        return computerSelection; 
    }

}

function playerSelection(){
    let playerSelect = prompt("Rock, Paper, Scissors!?", "Shoot!");
    console.log(playerSelect.toUpperCase());
    playerSelect = playerSelect.toUpperCase(); 
    return playerSelect; 
}

function playRound(person, computer){
    person = playerSelection(); 
    person = person.toUpperCase();
    computer = computerPlay();

    if(person === computer){
         console.log("Draw!");
    }
    else if((person === "PAPER")&&(computer==="ROCK")){
        console.log("You win! Paper beats rocks!");
        return playerScore++; 

    }
     else if((person === "ROCK")&&(computer==="SCISSORS")){
        console.log("You win! Rock beats scissors!");
        return playerScore++; 
    }
     else if((person === "SCISSORS")&&(computer==="PAPER")){
         console.log("You win! Scissors beats paper!");
         return playerScore++; 
    }
     else if((computer === "PAPER")&&(person==="ROCK")){
         console.log("You lose! Paper beats rocks!");
         return computerScore++; 
    }
     else if((computer === "ROCK")&&(person==="SCISSORS")){
         console.log("You lose! Rock beats scissors!");
         return computerScore++;
    }
     else if((computer === "SCISSORS")&&(person==="PAPER")){
         console.log("You lose! Scissors beats paper!");
         return computerScore++;
    }
}

function game(){

    do {
        playRound(); 
    } while ((playerScore <5)&&(computerScore<5));
    if(playerScore === 5){
        console.log("You won!");
    }else if(computerScore ===5){
        console.log("You lost :("); 
    }
}