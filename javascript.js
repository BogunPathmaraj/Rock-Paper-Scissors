
//Computer playing
function computerPlay()
{
    let moves = ['paper','rock', 'scissors']
    
    const randomMove = Math.floor(Math.random() * moves.length)
    
    return moves[randomMove]

}

//Player vs Computer
function faceOff(playerSelection, computerSelection)
{
    if (playerSelection === "paper" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors") 
    {
        return "It's a Tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" ||playerSelection === "scissors" && computerSelection === "paper")
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else
    {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


const playerSelection = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
const computerSelection = computerPlay();
console.log(faceOff(playerSelection,computerSelection))