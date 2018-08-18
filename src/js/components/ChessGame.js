import {initBoard, initTestBoard} from '../util/helper'
import {getValidMoves} from '../util/move'
import ChessBoard from './ChessBoard';

export default class ChessGame extends React.Component {

	constructor(props) {
		super(props);
		this.state = initBoard();
		this.clickHandler = this.clickHandler.bind(this);
		this.movePiece = this.movePiece.bind(this);
		this.addPiece = this.addPiece.bind(this);
		this.removePiece = this.removePiece.bind(this);
		
	}

	removePiece(row, col, player) {
		
		
	}

	addPiece(row, col, piece) {
		let  newRow = {
			[row]: [...this.state.board[row].slice(0,col-1) , piece , ...this.state.board[row].slice(col)]
		}
		this.setState( {
			board: Object.assign({}, this.state.board, newRow)
		})
	}

	movePiece(pre_row, pre_col, new_row, new_col, piece) {
		let pre = {[pre_row]: [...this.state.board[pre_row].slice(0,pre_col-1) ,  null, ...this.state.board[pre_row].slice(pre_col)]};
		this.setState( {
			board: Object.assign({}, this.state.board, pre)
		},
			() => {
				this.addPiece(new_row, new_col, piece);
			}
		)
		
		let [player, type] = piece.split('@');
		if (player == 'w') {
			this.setState({ 
				whitePieceOnBoard: Object.assign({}, 
					this.state.whitePieceOnBoard, 
					{ [type] : Object.assign({}, 
						this.state.whitePieceOnBoard[type], { loc: new_row+new_col}
						) 
					}
				)
			})
		}
		else if (player == 'b') {
			this.setState({ 
				blackPieceOnBoard: Object.assign({}, 
					this.state.blackPieceOnBoard, 
					{ [type] : Object.assign({}, 
						this.state.blackPieceOnBoard[type], { loc: new_row+new_col}
						) 
					}
				)
			})
		}
		else {
			console.log("something went wrong");
		}
	}

	resetPiece() {
		this.setState({ selectedPiece : null});
		this.setState({ posTiles : new Set()});
	}

	clickHandler () {
		return (
			{
				tileClick : (tile_id) => {
					let selectedPiece = this.state.selectedPiece;
					// piece is selected so move piece to selected tile
					if (selectedPiece) {
						//check valid move by looking at posTiles => if yes move the piece and update, if not set selected and posTiles to null
						if (this.state.posTiles.has(tile_id)) {
							
							let pre_row = selectedPiece.loc[0];
							let pre_col = parseInt(selectedPiece.loc[1]);

							let next_row = tile_id[0];
							let next_col = parseInt(tile_id[1]);
							this.movePiece(pre_row, pre_col, next_row, next_col, selectedPiece.id);
							this.setState({ isWhiteTurn : !this.state.isWhiteTurn});
							this.resetPiece();			
						}
						//invalide move, two choice 1. reset , 2. do nothing
						else {
							this.resetPiece();
						}
					}
					// piece is not selected, so do nothing
					else {
						return
					}

				},

				//piece {player, piece}
				pieceClick : (e, piece) =>{
					e.stopPropagation();
  					e.nativeEvent.stopImmediatePropagation();;
  					let pickedPiece = piece.player == 'w' ? this.state.whitePieceOnBoard[piece.piece] : this.state.blackPieceOnBoard[piece.piece];
  					let selectedPiece = this.state.selectedPiece;
  			
  					//check if it is second pick 
  					if (selectedPiece) {
  						//(piece is white and turn is white) or (piece is black and turn is black), then change current piece or castling
  						if((piece.player == 'w' && this.state.isWhiteTurn) || (piece.player === 'b' && !this.state.isWhiteTurn)) {
							this.setState({ selectedPiece : pickedPiece});
							this.setState({ posTiles : getValidMoves(pickedPiece.loc, pickedPiece.type,  piece.player, this.state.board)});
						}
						//attack move
						else {
							let attackedPiece = this.state.isWhiteTurn ? this.state.blackPieceOnBoard[piece.piece] : this.state.whitePieceOnBoard[piece.piece];

							//possible move
							if (this.state.posTiles.has(attackedPiece.loc)) {
								console.log(attackedPiece.loc);
								let next_row = attackedPiece.loc[0];
								let next_col = parseInt(attackedPiece.loc[1]);

								let pre_row = selectedPiece.loc[0];
								let pre_col = parseInt(selectedPiece.loc[1]);
								this.movePiece(pre_row, pre_col, next_row, next_col, selectedPiece.id);
								//next turn
								this.setState({ isWhiteTurn : !this.state.isWhiteTurn});
								this.resetPiece();
							}
							//impossible move, reset
							else {
								this.resetPiece();
							}
						}
  					}
  					//first pick
  					else {
  						//piece is white and turn is white, then set
  						if (piece.player === 'w' && this.state.isWhiteTurn) {
							pickedPiece = this.state.whitePieceOnBoard[piece.piece];
						}
						//piece is black and turn is black, then set
						else if (piece.player === 'b' && !this.state.isWhiteTurn) {
							pickedPiece = this.state.blackPieceOnBoard[piece.piece];
						}
						// wrong piece is selected, reset
						else {
							this.resetPiece();
							return
						}
						//set selectedPiece as pickedPiece and get validMoves
						this.setState({ selectedPiece : pickedPiece});
						this.setState({ posTiles : getValidMoves(pickedPiece.loc, pickedPiece.type, piece.player, this.state.board)});
  					}
				}

			}
		)
	}

	render() {

		return (
			<div className="chess-game">
				<h1>Chess App</h1>
				<ChessBoard board = {this.state.board} posTiles={this.state.posTiles} clickHandler = {this.clickHandler()}>

				</ChessBoard>
				<h3>Current Turn: { this.state.isWhiteTurn ? 'white' : 'black' }</h3>
			</div>
		);
	}
}





