const teamOneName = document.querySelector("#one-name");
const teamOneInput = document.querySelector("#one-input");
const teamOneScore = document.querySelector("#one-score");
let countForOne = 0;

const teamTwoInput = document.querySelector("#two-input");
const teamTwoName = document.querySelector("#two-name");
const teamTwoScore = document.querySelector("#two-score");
let countForTwo = 0;

const btns = document.querySelectorAll("button");
const scoreInput = document.querySelector("#score-input");
const result = document.querySelector(".result");
let winningScore = 0;
let isGameOver = false;

teamOneInput.addEventListener("blur", (event) => {
    if (teamOneInput.value.length != 0) {
        teamOneName.innerText = teamOneInput.value;
        teamOneInput.value = "";
    }
});

teamTwoInput.addEventListener("blur", (event) => {
    if (teamTwoInput.value.length != 0) {
        teamTwoName.innerText = teamTwoInput.value;
        teamTwoInput.value = "";
    }
});

scoreInput.addEventListener("input", (event) => {
    winningScore = parseInt(event.target.value);
});

for (let btn of btns) {
    btn.addEventListener("click", (event) => {
        const classList = event.target.classList;

        if (classList.contains("one-add-button") && winningScore !== 0) {
            if (!isGameOver) {
                ++countForOne;
                if (countForOne === winningScore) {
                    isGameOver = true;
                    teamOneScore.classList.add("winner");
                    teamTwoScore.classList.add("loser");
                    result.textContent = `${teamOneName.textContent} won against ${teamTwoName.textContent}`;
                }
                teamOneScore.textContent = countForOne;
            }
        } else if (classList.contains("one-minus-button") && countForOne > 0) {
            if (!isGameOver) {
                --countForOne;
                teamOneScore.textContent = countForOne;
            }

        } else if (classList.contains("two-add-button") && winningScore !== 0) {
            if (!isGameOver) {
                ++countForTwo;
                if (countForTwo === winningScore) {
                    isGameOver = true;
                    teamOneScore.classList.add("loser");
                    teamTwoScore.classList.add("winner");
                    result.innerText = `${teamTwoName.innerText} won against ${teamOneName.innerText}`;
                }
                teamTwoScore.textContent = countForTwo;
            }
        } else if (classList.contains("two-minus-button") && countForTwo > 0) {
            if (!isGameOver) {
                --countForTwo;
                teamTwoScore.textContent = countForTwo;
            }
        } else if (classList.contains("reset")) {
            countForOne = 0;
            countForTwo = 0;
            winningScore = 0;
            isGameOver = false;
            scoreInput.value = "";
            teamOneScore.textContent = countForOne;
            teamTwoScore.textContent = countForTwo;
            teamOneName.textContent = "Team 1";
            teamTwoName.textContent = "Team 2";
            teamOneScore.classList.remove("winner", "loser");
            teamTwoScore.classList.remove("winner", "loser");
            result.innerText = "Will be shown here";
        }
    });
}

