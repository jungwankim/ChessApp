
function pawnValidMoves(loc, type, isWhite) {
	let validMove = new Set();
	let currentRow = loc[0];
	let currentCol = parseInt(loc[1]);
	if (isWhite) {
		validMove.add(currentRow + (currentCol + 1));
		if (currentCol == 2) {
			validMove.add(currentRow + (currentCol + 2));
		}
	}
	else {
		validMove.add(currentRow + (currentCol - 1));
		if (currentCol == 7) {
			validMove.add(currentRow + (currentCol - 2));
		}
	}


	return validMove;
}

export const getValidMoves = (loc, type, player) => {
	let isWhite= (player=='w');
	switch (type) {
		case 'pawn':
			return pawnValidMoves(loc, type, isWhite);
			break;
		default:
			return new Set();
			break;
	}

}





