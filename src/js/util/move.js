

function getNextRow(character) {
    return (character == 'H' ? '' : String.fromCharCode(character.charCodeAt(0) + 1));
}

function getPreRow(character) {
    return (character == 'A' ? '' : String.fromCharCode(character.charCodeAt(0) - 1));
}

function pawnValidMoves(loc, type, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);
	let leftRow = getPreRow(currentRow);
	let rightRow = getNextRow(currentRow);
	if (isWhite) {
		//check front
		if (board[currentRow][currentCol] == null) {
			validMove.add(currentRow + (currentCol + 1));
		}
		//check two tile front
		if (currentCol == 2 && (board[currentRow][currentCol + 1] == null)) {
			validMove.add(currentRow + (currentCol + 2));
		}
		
		if (leftRow) {
			if (board[leftRow][currentCol] != null) {
				validMove.add(leftRow + (currentCol + 1));
			}
		}
		if (rightRow) {
			if (board[rightRow][currentCol] != null) {
				validMove.add(rightRow + (currentCol + 1));
			}
		}
	}
	else {
		if (board[currentRow][currentCol - 2] == null) {
			validMove.add(currentRow + (currentCol - 1));
		}
		if (currentCol == 7 && (board[currentRow][currentCol - 3] == null)) {
			validMove.add(currentRow + (currentCol - 2));
		}
		if (leftRow) {
			if (board[leftRow][currentCol - 2] != null) {
				validMove.add(leftRow + (currentCol - 1));
			}
		}
		if (rightRow) {
			if (board[rightRow][currentCol - 2] != null) {
				validMove.add(rightRow + (currentCol - 1));
			}
		}
	}

	return validMove;
}

export const getValidMoves = (loc, type, player, board) => {
	let isWhite= (player=='w');
	switch (type) {
		case 'pawn':
			return pawnValidMoves(loc, type, isWhite,board);
			break;
		default:
			return new Set();
			break;
	}

}





