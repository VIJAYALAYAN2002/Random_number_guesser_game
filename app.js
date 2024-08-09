var score = 10;
var guessnumber = document.getElementById("input");
var result = document.getElementById("choice");
var random_num = Math.floor(Math.random() * 10) + 1;
var scoreElement = document.getElementById("score");

function check() {
    var enterednumber = parseInt(guessnumber.value);

    if (random_num == enterednumber) {
        console.log("RIGHT");
        result.textContent = "RIGHT";
        alert("YOU WON");
    } else {
        score = score - 1;
        console.log("WRONG");
        result.textContent = "WRONG";
        scoreElement.textContent = "Score: " + score;

        if (score <= 0) {
            alert("You lose");
            location.reload();
        }
    }
}
