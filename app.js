function computerPlay(playerSelection, computerSelection = Math.floor(Math.random() * 3)) {
    let arr = ['Rock', 'Paper', 'Scissors']
    let computer = arr[computerSelection]
    let player = playerSelection.toLowerCase()
    let playerCap = player.charAt(0).toUpperCase() + player.slice(1);
    if (player === computer.toLowerCase()) {
        return "Tie!"
    } else if ((player === 'rock' && computer === 'Scissors') || (player === 'paper' && computer === 'Rock') || (player === 'scissors' && computer === 'Paper')) {
        return `You Win! ${playerCap} beats ${computer}`
    } else  {
        return `You Lose! ${computer} beats ${playerCap}`
    }  
}

console.log(computerPlay('RocK'))