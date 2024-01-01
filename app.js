// Treba napraviti f-ju koja ce nasumicno birati izbor izmedju papira, kamena ili makaza, AI igrac.
/* u f-ji ce se nalaziti niz od ova 3 izbora.
pomocu math.floor and math random tako nes ce se birati broj izmedju 0 - 2 koji ce da predstavlja redni broj izbora */
function getComputerChoice() {
    const choiceArray = ["Rock", "Paper", "Scissors"];
    const randomChoiceValue =
        choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoiceValue;
}
// Treba napraviti variablu u kojoj ce igrac da upise svoj izbor (case insensitive).

// Treba napraviti f-ju koja ce da odigra jednu rundu papir kamen makaza.
function playRound() {
    const getPlayerChoice = prompt("Input your choise: ");
    const randomComputerChoice = getComputerChoice();
    console.log("Player: " + getPlayerChoice);
    console.log("Computer: " + randomComputerChoice);

    if (randomComputerChoice == "Rock" && getPlayerChoice == "Paper") {
        console.log("player won!");
    } else if (randomComputerChoice == "Rock" && getPlayerChoice == "Scissors") {
        console.log("computer won!");
    } else if (randomComputerChoice == "Rock" && getPlayerChoice == "Rock") {
        console.log("it's a tie!");
    } else if (randomComputerChoice == "Paper" && getPlayerChoice == "Paper") {
        console.log("it's a tie!");
    } else if (randomComputerChoice == "Paper" && getPlayerChoice == "Rock") {
        console.log("computer won!");
    } else if (randomComputerChoice == "Paper" && getPlayerChoice == "Scissors") {
        console.log("player won!");
    } else if (randomComputerChoice == "Scissors" && getPlayerChoice == "Scissors") {
        console.log("it's a tie!");
    } else if (randomComputerChoice == "Scissors" && getPlayerChoice == "Rock") {
        console.log("player won!");
    } else {
        console.log("computer won!")
    }
}
// Treba napraviti f-ju koja ce da loop-uje *5 puta* f-ju runde, f-ja igre.
playRound();
