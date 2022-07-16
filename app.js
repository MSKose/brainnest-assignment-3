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

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors']
    let computer = arr[Math.floor(Math.random() * 3)]
    return computer
}

function playRound() {
  let a = prompt("Type your choice");
  let player = a.toLowerCase()
  return player
}

function game() {
  let playerCount = 0;
  let computerCount = 0;
  for (let i=1; i<=5; i++) {    
      let p = playRound() 
      let c = computerPlay() 
      if (p === (c).toLowerCase()) {
          console.log('Tie');
      } else if ((p === 'rock' && (c) === 'Scissors') || (p === 'paper' && (c) === 'Rock') || (p === 'scissors' && (c) === 'Paper')) {
          playerCount++;
          console.log(`You win, computer's choice was ${c}`);
      } else  {
          computerCount++;
          console.log(`You lose, computer's choice was ${c}`);
      } 
  }
  return playerCount === computerCount ? `Tie` : playerCount > computerCount ? `You won` : `You lost`
}
console.log(game());

