const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let board = Array(9).fill("");
let running = true;

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

// Create board dynamically
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => handleClick(cell, i));
    boardElement.appendChild(cell);
}

function handleClick(cell, index) {
    if (board[index] !== "" || !running) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkWinner();
}

function checkWinner() {
    for (let condition of winConditions) {
        const [a,b,c] = condition;

        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            highlightWin(condition);
            statusText.textContent = `Player ${currentPlayer} Wins!`;
            running = false;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.textContent = "It's a Draw!";
        running = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function highlightWin(cells) {
    cells.forEach(index => {
        document.querySelectorAll(".cell")[index].classList.add("win");
    });
}

function restartGame() {
    board = Array(9).fill("");
    running = true;
    currentPlayer = "X";
    statusText.textContent = "Player X's Turn";
    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("win");
    });
}
