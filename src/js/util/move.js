

function getNextRow(character) {
    return (character == 'H' || character == '' ? '' : String.fromCharCode(character.charCodeAt(0) + 1));
}

function getPreRow(character) {
    return (character == 'A' || character == '' ? '' : String.fromCharCode(character.charCodeAt(0) - 1));
}

//refractor checking piece in following order
//check undefined => stop
//check opposite piece => add then stop
//check same piece => stop
//check null => add then next

function isVaildTile(row, col, board, isWhite) {

	if (board[row][col] === undefined) {
		return false;
	}
	else if (board[row][col] !== null) {
		if (board[row][col][0] === 'b' && isWhite) {
			return true;
		}
		else if (board[row][col][0] === 'w' && !isWhite) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return true;
	}
}

function pawnValidMoves(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);
	let leftRow = getPreRow(currentRow);
	let rightRow = getNextRow(currentRow);
 
	if (isWhite) {
		//check front
		if (board[currentRow][currentCol] === null) {
			validMove.add(currentRow + (currentCol + 1));
			//check two tile front

			if (currentCol === 2 && (board[currentRow][currentCol + 1] === null)) {
				validMove.add(currentRow + (currentCol + 2));
			}
		}
		
		if (leftRow) {
			if (board[leftRow][currentCol] !== null) {
				if (board[leftRow][currentCol][0] === 'b' && isWhite) {
					validMove.add(leftRow + (currentCol + 1));
				}
				else if (board[leftRow][currentCol][0] === 'w' && !isWhite) {
					validMove.add(leftRow + (currentCol + 1));
				}
			}
		}
		if (rightRow) {
			if (board[rightRow][currentCol] !== null) {
				if (board[rightRow][currentCol][0] === 'b' && isWhite) {
					validMove.add(rightRow + (currentCol + 1));
				}
				else if (board[rightRow][currentCol][0] === 'w' && !isWhite) {
					validMove.add(rightRow + (currentCol + 1));
				}
			}
		}
	}
	else {
		if (board[currentRow][currentCol - 2] === null) {
			validMove.add(currentRow + (currentCol - 1));
			if (currentCol === 7 && (board[currentRow][currentCol - 3] === null)) {
				validMove.add(currentRow + (currentCol - 2));
			}
		}
		
		if (leftRow) {
			if (board[leftRow][currentCol - 2] !== null) {
				if (board[leftRow][currentCol - 2][0] === 'b' && isWhite) {
					validMove.add(leftRow + (currentCol - 1));
				}
				else if (board[leftRow][currentCol - 2][0] === 'w' && !isWhite) {
					validMove.add(leftRow + (currentCol - 1));
				}
			}
		}
		if (rightRow) {
			if (board[rightRow][currentCol - 2] !== null) {
				if (board[rightRow][currentCol - 2][0] === 'b' && isWhite) {
					validMove.add(rightRow + (currentCol - 1));
				}
				else if (board[rightRow][currentCol - 2][0] === 'w' && !isWhite) {
					validMove.add(rightRow + (currentCol - 1));
				}
			}
		}
	}

	return validMove;
}

function knightValidMove(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);
	let leftRow = getPreRow(currentRow);
	let leftRow2 = getPreRow(leftRow);
	let rightRow = getNextRow(currentRow);
	let rightRow2 = getNextRow(rightRow);
		//check front
	if (leftRow) {
		if(isVaildTile(leftRow, (currentCol + 1), board, isWhite)) {
			validMove.add(leftRow + (currentCol + 2));
		}
		if(isVaildTile(leftRow, (currentCol - 3), board, isWhite)) {
			validMove.add(leftRow + (currentCol - 2));
		}
	}
	if (leftRow2) {
		if(isVaildTile(leftRow2, (currentCol), board, isWhite)) {
			validMove.add(leftRow2 + (currentCol + 1));
		}
		if(isVaildTile(leftRow2, (currentCol - 2), board, isWhite)) {
			validMove.add(leftRow2 + (currentCol - 1));
		}
	}

	if (rightRow) {
		if(isVaildTile(rightRow, (currentCol + 1), board, isWhite)) {
			validMove.add(rightRow + (currentCol + 2));
		}
		if(isVaildTile(rightRow, (currentCol - 3), board, isWhite)) {
			validMove.add(rightRow + (currentCol - 2));
		}
	}
	if (rightRow2) {	
		if(isVaildTile(rightRow2, (currentCol), board, isWhite)) {
			validMove.add(rightRow2 + (currentCol + 1));
		}
		if(isVaildTile(rightRow2, (currentCol - 2), board, isWhite)) {
			validMove.add(rightRow2 + (currentCol - 1));
		}
	}
	return validMove;
}


function kingValidMove(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);
	let leftRow = getPreRow(currentRow);
	let rightRow = getNextRow(currentRow);

	if (leftRow) {
		if (isVaildTile(leftRow, currentCol - 2, board, isWhite)) {
			validMove.add(leftRow + (currentCol - 1));
		}
		if (isVaildTile(leftRow, currentCol - 1, board, isWhite)) {
			validMove.add(leftRow + (currentCol));
		}
		if (isVaildTile(leftRow, currentCol, board, isWhite)) {
			validMove.add(leftRow + (currentCol + 1));
		}
		
	}
	if (rightRow) {
		if (isVaildTile(rightRow, currentCol - 2, board, isWhite)) {
			validMove.add(rightRow + (currentCol - 1));
		}
		if (isVaildTile(rightRow, currentCol - 1, board, isWhite)) {
			validMove.add(rightRow + (currentCol));
		}
		if (isVaildTile(rightRow, currentCol, board, isWhite)) {
			validMove.add(rightRow + (currentCol + 1));
		}
	}
	if (isVaildTile(currentRow, currentCol - 2, board, isWhite)) {
		validMove.add(currentRow + (currentCol - 1));
	}
	if (isVaildTile(currentRow, currentCol, board, isWhite)) {
		validMove.add(currentRow + (currentCol + 1));
	}

	return validMove;
} 

function rockValidMove(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);

	let interateRow = getPreRow(currentRow);
	while(interateRow) {
		if (isVaildTile(interateRow, currentCol - 1, board, isWhite)) {
			validMove.add(interateRow + currentCol);
			if (board[interateRow][currentCol - 1] !== null) {
				break;
			}
		}
		else {
			break;
		}
		interateRow = getPreRow(interateRow);
	}
	interateRow = getNextRow(currentRow);
	while(interateRow) {
		if (isVaildTile(interateRow, currentCol - 1, board, isWhite)) {
			validMove.add(interateRow + currentCol);
			if (board[interateRow][currentCol - 1] !== null) {
				break;
			}
		}
		else {
			break;
		}
		interateRow = getNextRow(interateRow);
	}

	// check down direction
	let iterateCol = currentCol - 2;
	while(iterateCol >= 0) {
		if (isVaildTile(currentRow, iterateCol, board, isWhite)) {
			validMove.add(currentRow + (iterateCol + 1));
			if (board[currentRow][iterateCol] !== null) {
				break;
			}
		}
		else {
			break;
		}
		iterateCol = (iterateCol - 1);
	}
	// check up direction
	iterateCol = currentCol;
	while(iterateCol <= 7) {
		if (isVaildTile(currentRow, iterateCol, board, isWhite)) {
			validMove.add(currentRow + (iterateCol + 1));
			if (board[currentRow][iterateCol] !== null) {
				break;
			}
		}
		else {
			break;
		}
		iterateCol = (iterateCol + 1);
	}

	return validMove;
} 

function bishopValidMove(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);

	let interateRow = getPreRow(currentRow);
	let iterateCol = 1;
	let stopUpSide = false;
	let stopDownSide = false;
	while(interateRow) {
		if(!stopUpSide) {
			//null , undefined, or piece
			//case 1. undefined
			if (isVaildTile(interateRow, currentCol - 1 + iterateCol, board, isWhite)) {
				validMove.add(interateRow + (currentCol + iterateCol));
				if (board[interateRow][currentCol - 1 + iterateCol] !== null) {
					stopUpSide = true;
				}
			}
			else {
				stopUpSide = true;;
			}
		}
		if(!stopDownSide) {
			if (isVaildTile(interateRow, currentCol - 1 - iterateCol, board, isWhite)) {
				validMove.add(interateRow + (currentCol - iterateCol));
				if (board[interateRow][currentCol - 1 - iterateCol] !== null) {
					stopDownSide = true;
				}
			}
			else {
				stopDownSide = true;;
			}
		}
		interateRow = getPreRow(interateRow);
		iterateCol = iterateCol + 1;
	}
	
	interateRow = getNextRow(currentRow);
 	iterateCol = 1;
	stopUpSide = false;
 	stopDownSide = false;
	while(interateRow) {
		if(!stopUpSide) {
			//null , undefined, or piece
			//case 1. undefined
			if (isVaildTile(interateRow, currentCol - 1 + iterateCol, board, isWhite)) {
				validMove.add(interateRow + (currentCol + iterateCol));
				if (board[interateRow][currentCol - 1 + iterateCol] !== null) {
					stopUpSide = true;
				}
			}
			else {
				stopUpSide = true;;
			}
		}
		if(!stopDownSide) {
			if (isVaildTile(interateRow, currentCol - 1 - iterateCol, board, isWhite)) {
				validMove.add(interateRow + (currentCol - iterateCol));
				if (board[interateRow][currentCol - 1 - iterateCol] !== null) {
					stopDownSide = true;
				}
			}
			else {
				stopDownSide = true;;
			}
		}
		interateRow = getNextRow(interateRow);
		iterateCol = iterateCol + 1;
	}
	return validMove;
} 



export const getValidMoves = (loc, type, player, board) => {
	let isWhite= (player =='w');
	switch (type) {
		case 'pawn':
			return pawnValidMoves(loc, isWhite, board);
			break;
		case 'knight': 
			return knightValidMove(loc, isWhite, board);
			break;
		case 'king':
			return kingValidMove(loc, isWhite, board);
			break;
		case 'rock':
			return rockValidMove(loc, isWhite, board);
			break;
		case 'bishop':
			return bishopValidMove(loc, isWhite, board);
			break;
		case 'queen':
			let kingmove = kingValidMove(loc, isWhite, board);
			let rockmove = rockValidMove(loc, isWhite, board);
			let bishopmove = bishopValidMove(loc, isWhite, board);
			return new Set([...kingmove, ...rockmove, ...bishopmove]);
			break;
		default:
			return new Set();
			break;
	}

}





