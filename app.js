// Treba napraviti f-ju koja ce nasumicno birati izbor izmedju papira, kamena ili makaza, AI igrac.
/* u f-ji ce se nalaziti niz od ova 3 izbora.
pomocu math.floor and math random tako nes ce se birati broj izmedju 0 - 2 koji ce da predstavlja redni broj izbora */
function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomChoiceValue =
        choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoiceValue;
}
// treba napraviti variablu u kojoj ce igrac da upise svoj izbor (case insensitive).

// treba napraviti f-ju koja ce da odigra jednu rundu papir kamen makaza.
function playRound() {
    const getPlayerChoice = prompt("Input your choise: ").toLowerCase();
    const randomComputerChoice = getComputerChoice();
    console.log("Player: " + getPlayerChoice);
    console.log("Computer: " + randomComputerChoice);
    // determines who won and returns their respectabe value
    if (
        (randomComputerChoice == "rock" && getPlayerChoice == "paper") ||
        (randomComputerChoice == "paper" && getPlayerChoice == "scissors") ||
        (randomComputerChoice == "scissors" && getPlayerChoice == "rock")
    ) {
        console.log("Player won!");
        return "p";
    } else if (
        (randomComputerChoice == "rock" && getPlayerChoice == "scissors") ||
        (randomComputerChoice == "paper" && getPlayerChoice == "rock") ||
        (randomComputerChoice == "scissors" && getPlayerChoice == "paper")
    ) {
        console.log("Computer won!");
        return "c";
    } else {
        console.log("It's a tie!");
        return "t";
    }
}
// treba napraviti f-ju koja ce da loop-uje *5 puta* f-ju runde, f-ja igre.
function game() {
    // loop-ujemo 5 puta playRound()
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let whoWon = playRound();
        if (whoWon == "p") {
            playerScore++
            console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
        } else if (whoWon == "c") {
            computerScore++
            console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
        } else {
            while (whoWon == "t") {
                console.log("Play again.")
                whoWon = playRound();
                if (whoWon == "p") {
                    playerScore++
                    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
                } else if (whoWon == "c") {
                    computerScore++
                    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
                }
            }
        }
    }
    if (playerScore > computerScore) {
        alert("You won! :)")
    } else {
        alert("You lost! :(")
    }
}
game();