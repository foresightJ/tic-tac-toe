/*----- constants -----*/

/*----- app's state (variables) -----*/
// 2D array
let board = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
// Player  1 = X
// Player -1 = O
let player;
let winner;
/*----- cached element references -----*/
let gameBoard = document.getElementById('gameboard');
let messageEl = document.getElementById('message');

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleClick);

/*----- functions -----*/
init();

function handleClick(e) {
	let coords = parseCoords(e.target.id);
	if (board[coords.rIdx][coords.sIdx]) return;
	board[coords.rIdx][coords.sIdx] = player;
	// player = player * -1
	player *= -1;
	render();

	checkWinner();
	console.log('clicked!', coords.rIdx, coords.sIdx);
}

function init() {
	board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	player = 1;
	drawBoard();
	render();
}

// condition ? value if true : value if false

function render() {
	messageEl.textContent = `${player > 0 ? 'X' : 'O'}'s Turn!`;
	board.forEach(function (row, rIdx) {
		row.forEach(function (square, sIdx) {
			if (square == 0) return;
			document.getElementById(`s${rIdx}-${sIdx}`).textContent =
				square > 0 ? 'X' : 'O';
		});
	});
}

function drawBoard() {
	board.forEach(function (row, rIdx) {
		console.log(row);
		const rowDiv = document.createElement('div');
		rowDiv.classList.add('row');

		row.forEach(function (square, sIdx) {
			const squareDiv = document.createElement('div');
			squareDiv.classList.add('square');
			squareDiv.id = `s${rIdx}-${sIdx}`;
			rowDiv.appendChild(squareDiv);
			console.log(`${rIdx}:${sIdx} = ${square}`);
		});

		gameBoard.appendChild(rowDiv);
	});
}

function checkWinner() {
	winner = checkHoriz() || checkVert() || checkDiag();
	if (winner) {
		messageEl.textContent = `${player < 0 ? 'X' : 'O'} is the Winner! ggez`;
		gameBoard.removeEventListener('click', handleClick);
	}
}

/*----- helper functions -----*/

function parseCoords(id) {
	return { rIdx: id[1], sIdx: id[3] };
}

function checkHoriz() {
	for (let row of board) {
		let sum = row.reduce((acc, num) => acc + num);
		if (sum === 3) return 1; // Player 1 wins!
		if (sum === -3) return -1; // Player -1 wins!
	}
	return 0;
}

function checkVert() {
	for (let i = 0; i < board.length; i++) {
		let sum = board[0][i] + board[1][i] + board[2][i];
		if (sum === 3) return 1; // Player 1 wins!
		if (sum === -3) return -1; // Player -1 wins!
	}
	return 0;
}

function checkDiag() {
	let a = board[0][0] + board[1][1] + board[2][2];
	let b = board[0][2] + board[1][1] + board[2][0];
	if (a === 3 || b === 3) {
		return 1; // Player 1 wins!
	} else if (a === -3 || b === -3) {
		return -1; // Player -1 wins!
	} else {
		return 0;
	}
}
