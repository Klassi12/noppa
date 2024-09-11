document.addEventListener("DOMContentLoaded", function() {
    const diceDiv = document.getElementById("dice");
    const diceImage = diceDiv.querySelector("img");

    diceDiv.addEventListener("click", function() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        diceImage.src = `./img/${randomNumber}.png`;
    });
});