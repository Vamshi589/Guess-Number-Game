const randomNumber = parseInt(Math.random() * 50);

function guessedNumber(e) {
    e.preventDefault();
    const guessFeild = document.getElementById("guessFeild");

    if (+guessFeild.value === randomNumber) {
        document.getElementById("success").innerText = "Your guessed number is correct";
        document.getElementById("guessMsg").innerText = "Yooo";

    } else {


        document.getElementById("success").innerText = "Your guessed number is Incorrect";
        document.getElementById("remainingChancesValue").innerText =
            +document.getElementById("remainingChancesValue").innerText - 1;
    }

    document.getElementById("guessedNumber").innerText += guessFeild.value + ", ";

    if (document.getElementById("remainingChancesValue").innerText == 0) {
        document.getElementById("success").innerText = "Sorry you lost all chances";
        
        guessFeild.style.display = "none"
        document.getElementById("guessMsg").innerText = "click restart for play again";
    }

    if (+guessFeild.value > randomNumber) {
        document.getElementById("guessMsg").innerText = "Its Too High";
    }

    if (+guessFeild.value < randomNumber) {
        document.getElementById("guessMsg").innerText = "Its Too Low";
    }
}