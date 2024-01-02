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
    let getPlayerChoice = prompt("Input your choise: ");
    const randomComputerChoice = getComputerChoice();
    console.log("Player: " + getPlayerChoice);
    console.log("Computer: " + randomComputerChoice);
    // determines who won and returns their respectabe value
    if (
        (randomComputerChoice == "Rock" && getPlayerChoice == "Paper") ||
        (randomComputerChoice == "Paper" && getPlayerChoice == "Scissors") ||
        (randomComputerChoice == "Scissors" && getPlayerChoice == "Rock")
    ) {
        console.log("Player won!");
        return "p";
    } else if (
        (randomComputerChoice == "Rock" && getPlayerChoice == "Scissors") ||
        (randomComputerChoice == "Paper" && getPlayerChoice == "Rock") ||
        (randomComputerChoice == "Scissors" && getPlayerChoice == "Paper")
    ) {
        console.log("Computer won!");
        return "c";
    } else {
        console.log("It's a tie!");
        return "t";
    }
}
// Treba napraviti f-ju koja ce da loop-uje *5 puta* f-ju runde, f-ja igre.

