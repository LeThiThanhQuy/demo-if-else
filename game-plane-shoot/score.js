function myScore() {
    let score = 0;
    for (let plane of planes) {
        if (plane.isCrashed){
            score += 1;
        }
        return score;
    }
    document.getElementById("score").innerHTML = "Your score is: " + score;
}
myScore();

function gameOver() {
    let isGameOver = false;
    for (let plane of planes) {
        if (plane.x = document.getElementById("myCanvas").width){
            isGameOver = true;
        }
        return isGameOver;
    }
}
