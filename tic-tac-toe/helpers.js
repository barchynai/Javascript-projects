export const drawOnTile = (tile, currentPlayer) => {
    tile.innerText = currentPlayer;
    const nextPlayer = currentPlayer === 'X'? '0': 'X';
    return nextPlayer;  
};

export const checkWinner = (tileMatrix, tileX, tileY, currentPlayer) => {
    //we will use HOF every which checks if each element of array meets conditions of function
    //checking rows
    //we are telling take elements in X ось and check each if EVERY is = currentPlayer XXX or OOO
    const rowWin = tileMatrix[tileX].every(
        (matrixValue) => matrixValue === currentPlayer
    );
    //check columns
    const colWin = tileMatrix.every(
        (rowOfMatrixValues) => rowOfMatrixValues[tileY] === currentPlayer
    );
    //checking left to right diagonal 
    //we took the element of array and the indexof element in the array and if they are === current player then gameover
    const leftToRiht = tileMatrix.every(
        (rowOfMatrixValues, index) => rowOfMatrixValues[index]=== currentPlayer
    );
    
    //check right to left diagonal 
    const rightToLeft = tileMatrix.every(
        (rowOfMatrixValues, index) => rowOfMatrixValues[2-index] === currentPlayer
    );

    return rowWin || colWin || leftToRiht || rightToLeft;
};