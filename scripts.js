const result = document.querySelector(".result")
const yourScore = document.querySelector('.your-score')

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine)
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + 'Máquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate! 😜"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors' ) ||
        (human === 'scissors' && machine === 'paper' ) ) {
        result.innerHTML = "Você ganhou! 🏆"
    } else {
        result.innerHTML = "A máquina ganhou! 😎"
    }
}