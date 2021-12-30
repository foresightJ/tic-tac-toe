const greeting = "Welcome to the game";
console.log(greeting);

/*----- constants -----*/

const gameBoard = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

console.log(gameBoard);
gameBoard.forEach((row) => {
  // console.log(row);
  row.forEach((rowItem) => {
    console.log(rowItem);
  });
});

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
