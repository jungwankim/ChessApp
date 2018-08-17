import ChessBoard from './ChessBoard';

export default class ChessGame extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			board : {
				 A : ['w@rock1', 'w@bishop1', 'w@knight1', 'w@queen1', 'w@king1', 'w@knight2', 'w@bishop2', 'w@rock2'],
				 B : ['w@pawn1', 'w@pawn2', 'w@pawn3', 'w@pawn4', 'w@pawn5', 'w@pawn6', 'w@pawn7', 'w@pawn8'],
				 C : new Array(8).fill(null),
				 D : new Array(8).fill(null),
				 E : new Array(8).fill(null),
				 F : new Array(8).fill(null),
				 G : ['b@pawn1', 'b@pawn2', 'b@pawn3', 'b@pawn4', 'b@pawn5', 'b@pawn6', 'b@pawn7', 'b@pawn8'],
				 H : ['b@rock1', 'b@bishop1', 'b@knight1', 'b@queen1', 'b@king1', 'b@knight2', 'b@bishop2', 'b@rock2'],
			},
			whitePieceOnBoard : {
				rock1: { loc : "A1", type: "rock"},
				rock2: { loc : "H1", type: "rock"},
				knight1: { loc: "B1", type: "knight"},
				knight2: { loc: "G1", type: "knight"},
				bishop1: { loc: "C1", type: "bishop"},
				bishop2: { loc: "F1", type: "bishop"},
				queen1: { loc: "D1", type: "queen"},
				king1: { loc: "E1", type: "king"},
				pawn1: { loc : "A2", type: "pawn"},
				pawn2: { loc : "B2", type: "pawn"},
				pawn3: { loc: "C2", type: "pawn"},
				pawn4: { loc: "D2", type: "pawn"},
				pawn5: { loc: "E2", type: "pawn"},
				pawn6: { loc: "F2", type: "pawn"},
				pawn7: { loc: "G2", type: "pawn"},
				pawn8: { loc: "H2", type: "pawn"}
			},

			blackPieceOnBoard : {
				rock1: { loc : "A8", type: "rock"},
				rock2: { loc : "H8", type: "rock"},
				knight1: { loc: "B8", type: "knight"},
				knight2: { loc: "G8", type: "knight"},
				bishop1: { loc: "C8", type: "bishop"},
				bishop2: { loc: "F8", type: "bishop"},
				queen1: { loc: "D8", type: "queen"},
				king1: { loc: "E8", type: "king"},
				pawn1: { loc : "A7", type: "pawn"},
				pawn2: { loc : "B7", type: "pawn"},
				pawn3: { loc: "C7", type: "pawn"},
				pawn4: { loc: "D7", type: "pawn"},
				pawn5: { loc: "E7", type: "pawn"},
				pawn6: { loc: "F7", type: "pawn"},
				pawn7: { loc: "G7", type: "pawn"},
				pawn8: { loc: "H7", type: "pawn"}
			},

			isWhiteTurn: true,
		};
		
	}

	render() {

		return (
			<div className="chess-game">
				<h1>Chess App</h1>
				<ChessBoard board = {this.state.board}>

				</ChessBoard>
				<h3>Current Turn: { this.state.isWhiteTurn ? 'white' : 'black' }</h3>
			</div>
		);
	}
}





