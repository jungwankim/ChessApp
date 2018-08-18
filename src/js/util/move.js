

function getNextRow(character) {
    return (character == 'H' || character == '' ? '' : String.fromCharCode(character.charCodeAt(0) + 1));
}

function getPreRow(character) {
    return (character == 'A' || character == '' ? '' : String.fromCharCode(character.charCodeAt(0) - 1));
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
		}
		//check two tile front
		if (currentCol === 2 && (board[currentRow][currentCol + 1] === null)) {
			validMove.add(currentRow + (currentCol + 2));
		}
		
		if (leftRow) {
			if (board[leftRow][currentCol] !== null) {
				validMove.add(leftRow + (currentCol + 1));
			}
		}
		if (rightRow) {
			if (board[rightRow][currentCol] !== null) {
				validMove.add(rightRow + (currentCol + 1));
			}
		}
	}
	else {
		if (board[currentRow][currentCol - 2] === null) {
			validMove.add(currentRow + (currentCol - 1));
		}
		if (currentCol === 7 && (board[currentRow][currentCol - 3] === null)) {
			validMove.add(currentRow + (currentCol - 2));
		}
		if (leftRow) {
			if (board[leftRow][currentCol - 2] !== null) {
				validMove.add(leftRow + (currentCol - 1));
			}
		}
		if (rightRow) {
			if (board[rightRow][currentCol - 2] !== null) {
				validMove.add(rightRow + (currentCol - 1));
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
		if (board[leftRow][currentCol + 1] !== undefined) {
		validMove.add(leftRow + (currentCol + 2));
		}
		if (board[leftRow][currentCol - 3] !== undefined) {
			validMove.add(leftRow + (currentCol - 2));
		}
	}
	if (leftRow2) {
		if (board[leftRow2][currentCol] !== undefined) {
		validMove.add(leftRow2 + (currentCol + 1));
		}
		if (board[leftRow2][currentCol - 2] !== undefined) {
			validMove.add(leftRow2 + (currentCol - 1));
		}
	}
	if (rightRow) {
		if (board[rightRow][currentCol + 1] !== undefined) {
		validMove.add(rightRow + (currentCol + 2));
		}
		if (board[rightRow][currentCol - 3] !== undefined) {
			validMove.add(rightRow + (currentCol - 2));
		}
	}
	if (rightRow2) {		
		if (board[rightRow2][currentCol] !== undefined) {
			validMove.add(rightRow2 + (currentCol + 1));
		}
		if (board[rightRow2][currentCol - 2] !== undefined) {
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
		if (board[leftRow][currentCol - 2] !== undefined) {
			validMove.add(leftRow + (currentCol - 1));
		}
		if (board[leftRow][currentCol - 1] !== undefined) {
			validMove.add(leftRow + (currentCol));
		}
		if (board[leftRow][currentCol] !== undefined) {
			validMove.add(leftRow + (currentCol + 1));
		}
	}
	if (rightRow) {
		if (board[rightRow][currentCol - 2] !== undefined) {
			validMove.add(rightRow + (currentCol - 1));
		}
		if (board[rightRow][currentCol - 1] !== undefined) {
			validMove.add(rightRow + (currentCol));
		}
		if (board[rightRow][currentCol] !== undefined) {
			validMove.add(rightRow + (currentCol + 1));
		}
	}

	if (board[currentRow][currentCol - 2] !== undefined) {
		validMove.add(currentRow + (currentCol - 1));
	}
	if (board[currentRow][currentCol] !== undefined) {
		validMove.add(currentRow + (currentCol + 1));
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
		default:
			return new Set();
			break;
	}

}





