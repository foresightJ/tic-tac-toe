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
