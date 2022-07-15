// function computerPlay() {
//     let arr = ['Rock', 'Paper', 'Scissors']
//     let computer = arr[Math.floor(Math.random() * 3)]
//     return computer
// }

// function playRound(a, b) {
//     let player = a.toLowerCase()
//     let playerCap = player.charAt(0).toUpperCase() + player.slice(1);
//     if (player === (b).toLowerCase()) {
//         return "Tie!"
//     } else if ((player === 'rock' && (b) === 'Scissors') || (player === 'paper' && (b) === 'Rock') || (player === 'scissors' && (b) === 'Paper')) {
//         return `You Win! ${playerCap} beats ${(b)}`
//     } else  {
//         return `You Lose! ${(b)} beats ${playerCap}`
//     }  
// }

// const playerSelection = 'Rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))

function game() {
    let arr = ['Rock', 'Paper', 'Scissors']
    let playerCount = 0
    let computerCount = 0 
    for (let i=1; i<=5; i++) {
        const playerSelection = prompt("Type your choice");
        let player = playerSelection.toLowerCase()          // making sure to have case insensitive inputs
        let computer = arr[Math.floor(Math.random() * 3)]   // computer chosing randomly from arr
        if (player === (computer).toLowerCase()) {
            playerCount++
            computerCount++
            console.log('Tie')
        } else if ((player === 'rock' && (computer) === 'Scissors') || (player === 'paper' && (computer) === 'Rock') || (player === 'scissors' && (computer) === 'Paper')) {
            playerCount++
            console.log(`You win, computer's choice was ${computer}`);
        } else  {
            computerCount++
            console.log(`You lose, computer's choice was ${computer}`);
        } 
    }
    return playerCount > computerCount ? `You won` : `You lost`
}
console.log(game());
