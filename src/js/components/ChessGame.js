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
					this.state.whitePieceOnBoard, 
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

	clickHandler () {
		return (
			{
				tileClick : (tile_id) => {

					if (this.state.selectedPiece) {
						//check valid move by looking at posTiles => if yes move the piece and update, if not set selected and posTiles to null
						if (this.state.posTiles.has(tile_id)) {
							
							let pre_row = this.state.selectedPiece.loc[0];
							let pre_col = parseInt(this.state.selectedPiece.loc[1]);

							let next_row = tile_id[0];
							let next_col = parseInt(tile_id[1]);
							this.movePiece(pre_row, pre_col, next_row, next_col, this.state.selectedPiece.id);												
						}

						this.setState({ selectedPiece : null});
						this.setState({ posTiles : new Set()});
					}
					else {
						//do nothing
					}

				},

				//piece {player, piece}
				pieceClick : (e, piece) =>{

					e.stopPropagation();
  					e.nativeEvent.stopImmediatePropagation();;

					let selected = null;
					if (piece.player === 'w') {
						selected = this.state.whitePieceOnBoard[piece.piece];
					}
					else {
						selected = this.state.blackPieceOnBoard[piece.piece];
					}

					if (this.state.selectedPiece) {
						//clicked alley
						if(piece.player == 'w' && this.state.isWhiteTurn) {
							this.setState({ selectedPiece : selected});
							this.setState({ posTiles : getValidMoves(selected.loc, selected.type, this.state.isWhiteTurn)});
						}
						//clicked enemy 
						else {
							if (this.state.posTiles.has(selected.loc)) {


							}
							
							let pre_row = this.state.selectedPiece.loc[0];
							let pre_col = parseInt(this.state.selectedPiece.loc[1]);

							let next_row = tile_id[0];
							let next_col = parseInt(tile_id[1]);
							this.movePiece(pre_row, pre_col, next_row, next_col, this.state.selectedPiece.id);
						}
					}
					else {
						//set selectedPiece and get possible movement and store in posTiles and change tile color by adding class.
						this.setState({ selectedPiece : selected});
						this.setState({ posTiles : getValidMoves(selected.loc, selected.type, piece.player)});
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





