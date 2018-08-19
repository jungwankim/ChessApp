

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
			//check two tile front

			if (currentCol === 2 && (board[currentRow][currentCol + 1] === null)) {
				validMove.add(currentRow + (currentCol + 2));
			}
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
			if (currentCol === 7 && (board[currentRow][currentCol - 3] === null)) {
				validMove.add(currentRow + (currentCol - 2));
			}
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
			if (board[leftRow][currentCol - 2] !== null) {
				if (board[leftRow][currentCol - 2][0] === 'b' && isWhite) {
					validMove.add(leftRow + (currentCol - 1));
				}
				else if (board[leftRow][currentCol - 2][0] === 'w' && !isWhite) {
					validMove.add(leftRow + (currentCol - 1));
				}
			}
			else {
				validMove.add(leftRow + (currentCol - 1));
			}
		}
		if (board[leftRow][currentCol - 1] !== undefined) {
			if (board[leftRow][currentCol - 1] !== null) {
				if (board[leftRow][currentCol - 1][0] === 'b' && isWhite) {
					validMove.add(leftRow + (currentCol));
				}
				else if (board[leftRow][currentCol - 1][0] === 'w' && !isWhite) {
					validMove.add(leftRow + (currentCol));
				}
			}
			else {
				validMove.add(leftRow + (currentCol));
			}
		}
		if (board[leftRow][currentCol] !== undefined) {
			if (board[leftRow][currentCol] !== null) {
				if (board[leftRow][currentCol][0] === 'b' && isWhite) {
					validMove.add(leftRow + (currentCol + 1));
				}
				else if (board[leftRow][currentCol][0] === 'w' && !isWhite) {
					validMove.add(leftRow + (currentCol + 1));
				}
			}
			else {
				validMove.add(leftRow + (currentCol + 1));
			}
		}
	}
	if (rightRow) {
		if (board[rightRow][currentCol - 2] !== undefined) {
			if (board[rightRow][currentCol - 2] !== null) {
				if (board[rightRow][currentCol - 2][0] === 'b' && isWhite) {
					validMove.add(rightRow + (currentCol - 1));
				}
				else if (board[rightRow][currentCol - 2][0] === 'w' && !isWhite) {
					validMove.add(rightRow + (currentCol - 1));
				}
			}
			else {
				validMove.add(rightRow + (currentCol - 1));
			}
		}
		if (board[rightRow][currentCol - 1] !== undefined) {
			if (board[rightRow][currentCol - 1] !== null) {
				if (board[rightRow][currentCol - 1][0] === 'b' && isWhite) {
					validMove.add(rightRow + (currentCol));
				}
				else if (board[rightRow][currentCol - 1][0] === 'w' && !isWhite) {
					validMove.add(rightRow + (currentCol));
				}
			}
			else {
				validMove.add(rightRow + (currentCol));
			}
		}
		if (board[rightRow][currentCol] !== undefined) {
			if (board[rightRow][currentCol] !== null) {
				if (board[rightRow][currentCol][0] === 'b' && isWhite) {
					validMove.add(rightRow + (currentCol + 1));
				}
				else if (board[rightRow][currentCol][0] === 'w' && !isWhite) {
					validMove.add(rightRow + (currentCol + 1));
				}
			}
			else {
				validMove.add(rightRow + (currentCol + 1));
			}
		}
	}

	if (board[currentRow][currentCol - 2] !== undefined) {
		if (board[currentRow][currentCol - 2] !== null) {
				if (board[currentRow][currentCol - 2][0] === 'b' && isWhite) {
					validMove.add(currentRow + (currentCol - 1));
				}
				else if (board[currentRow][currentCol - 2][0] === 'w' && !isWhite) {
					validMove.add(currentRow + (currentCol - 1));
				}
		}
		else {
			validMove.add(currentRow + (currentCol - 1));
		}
	}
	if (board[currentRow][currentCol] !== undefined) {
		if (board[currentRow][currentCol] !== null) {
				if (board[currentRow][currentCol][0] === 'b' && isWhite) {
					validMove.add(currentRow + (currentCol + 1));
				}
				else if (board[currentRow][currentCol][0] === 'w' && !isWhite) {
					validMove.add(currentRow + (currentCol + 1));
				}
		}
		else {
			validMove.add(currentRow + (currentCol + 1));
		}
	}
	return validMove;
} 

function rockValidMove(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);
	let validRow = [];
	let validCol = [];
	let interateRow = getPreRow(currentRow);
	let iterateCol = currentCol - 2;
	while(interateRow) {
		if (board[interateRow][currentCol - 1] !== null) {
			if (board[interateRow][currentCol - 1][0] === 'b' && isWhite) {
				validRow.push(interateRow);
				break;
			}
			else if (board[interateRow][currentCol - 1][0] === 'w' && !isWhite) {
				validRow.push(interateRow);
				break;
			}
			else {
				break;
			}
		}
		else {
			validRow.push(interateRow);
		}
		interateRow = getPreRow(interateRow);
	}
	interateRow = getNextRow(currentRow);
	while(interateRow) {
		if (board[interateRow][currentCol - 1] !== null) {
			if (board[interateRow][currentCol - 1][0] === 'b' && isWhite) {
				validRow.push(interateRow);
				break;
			}
			else if (board[interateRow][currentCol - 1][0] === 'w' && !isWhite) {
				validRow.push(interateRow);
				break;
			}
			else {
				break;
			}
		}
		else {
			validRow.push(interateRow);
		}
		interateRow = getNextRow(interateRow);
	}
	// check down direction
	while(iterateCol >= 0) {
		if (board[currentRow][iterateCol] !== null) {
			if (board[currentRow][iterateCol][0] === 'b' && isWhite) {
				validCol.push(iterateCol+1);
				break;
			}
			else if (board[currentRow][iterateCol][0] === 'w' && !isWhite) {
				validCol.push(iterateCol+1);
				break;
			}
			else {
				break;
			}
		}
		else {
			validCol.push(iterateCol+1);
		}
		iterateCol = (iterateCol - 1);
	}
	// check down direction
	iterateCol = currentCol;
	while(iterateCol <= 7) {
		if (board[currentRow][iterateCol] !== null) {
			if (board[currentRow][iterateCol][0] === 'b' && isWhite) {
				validCol.push(iterateCol+1);
				break;
			}
			else if (board[currentRow][iterateCol][0] === 'w' && !isWhite) {
				validCol.push(iterateCol+1);
				break;
			}
			else {
				break;
			}
		}
		else {
			validCol.push(iterateCol+1);
		}
		iterateCol = (iterateCol + 1);
	}

	validRow.map((row) => {
		validMove.add(row + currentCol);
	});
	validCol.map((col) => {
		validMove.add(currentRow + col);
	})
	return validMove;
} 

function bishopValidMove(loc, isWhite, board) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);;
	let interateRow = getPreRow(currentRow);
	let iterateCol = 1;
	let stopUpSide = false;
	let stopDownSide = false;

	while(interateRow) {
		if(!stopUpSide) {
			//null , undefined, or piece
			//case 1. undefined
			let leftUpPiece = board[interateRow][currentCol - 1 + iterateCol]
			if (leftUpPiece === undefined) {
				stopUpSide = true;
			}
			//case 2, piece
			else if (leftUpPiece !== null) {
				if (leftUpPiece[0] === 'b' && isWhite) {
					validMove.add(interateRow + (currentCol + iterateCol));
					stopUpSide = true;
				}
				else if (leftUpPiece[0] === 'w' && !isWhite) {
					validMove.add(interateRow + (currentCol + iterateCol));
					stopUpSide = true;
				}
				else {
					stopUpSide = true;;
				}
			}
			//case 3, null = empty tile
			else {
				validMove.add(interateRow + (currentCol + iterateCol));
			}
		}
		if(!stopDownSide) {
			//null , undefined, or piece
			//case 1. undefined
			let leftDownPiece = board[interateRow][currentCol - 1 - iterateCol]

			if (leftDownPiece === undefined) {
				stopDownSide = true;
			}
			//case 2, piece
			else if (leftDownPiece !== null) {
				if (leftDownPiece[0] === 'b' && isWhite) {
					validMove.add(interateRow + (currentCol - iterateCol));
					stopDownSide = true;
				}
				else if (leftDownPiece[0] === 'w' && !isWhite) {
					validMove.add(interateRow + (currentCol - iterateCol));
					stopDownSide = true;
				}
				else {
					stopDownSide = true;;
				}
			}
			//case 3, null = empty tile
			else {
				validMove.add(interateRow + (currentCol - iterateCol));
			}
		}
		interateRow = getPreRow(interateRow);
		iterateCol = iterateCol + 1;
	}

	stopUpSide = false;
 	stopDownSide = false;
 	interateRow = getNextRow(currentRow);
 	iterateCol = 1;

	while(interateRow) {
		if(!stopUpSide) {
			//null , undefined, or piece
			//case 1. undefined
			let leftUpPiece = board[interateRow][currentCol - 1 + iterateCol]
			if (leftUpPiece === undefined) {
				stopUpSide = true;
			}
			//case 2, piece
			else if (leftUpPiece !== null) {
				if (leftUpPiece[0] === 'b' && isWhite) {
					validMove.add(interateRow + (currentCol + iterateCol));
					stopUpSide = true;
				}
				else if (leftUpPiece[0] === 'w' && !isWhite) {
					validMove.add(interateRow + (currentCol + iterateCol));
					stopUpSide = true;
				}
				else {
					stopUpSide = true;;
				}
			}
			//case 3, null = empty tile
			else {
				validMove.add(interateRow + (currentCol + iterateCol));
			}
		}
		if(!stopDownSide) {
			//null , undefined, or piece
			//case 1. undefined
			let leftDownPiece = board[interateRow][currentCol - 1 - iterateCol]

			if (leftDownPiece === undefined) {
				stopDownSide = true;
			}
			//case 2, piece
			else if (leftDownPiece !== null) {
				if (leftDownPiece[0] === 'b' && isWhite) {
					validMove.add(interateRow + (currentCol - iterateCol));
					stopDownSide = true;
				}
				else if (leftDownPiece[0] === 'w' && !isWhite) {
					validMove.add(interateRow + (currentCol - iterateCol));
					stopDownSide = true;
				}
				else {
					stopDownSide = true;;
				}
			}
			//case 3, null = empty tile
			else {
				validMove.add(interateRow + (currentCol - iterateCol));
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





