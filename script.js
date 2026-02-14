const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let running = true;
let xScore = 0;
let oScore = 0;

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => cellClick(cell, index));
});

function cellClick(cell, index) {
    if(board[index] !== "" || !running) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkWinner();
}

function checkWinner() {
    let roundWon = false;

    for(let condition of winConditions) {
        const [a, b, c] = condition;

        if(board[a] && board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        if(currentPlayer === "X") {
            xScore++;
            scoreX.textContent = xScore;
        } else {
            oScore++;
            scoreO.textContent = oScore;
        }
        running = false;
        return;
    }

    if(!board.includes("")) {
        statusText.textContent = "It's a Draw!";
        running = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    running = true;
    currentPlayer = "X";
    statusText.textContent = "Player X's Turn";
    cells.forEach(cell => cell.textContent = "");
}
