

export const initBoard = () => {

	return (

		{
			board : {
				 A : ['w@rock1', 'w@pawn1', null, null, null, null, 'b@pawn1', 'b@rock1'],
				 B : ['w@knight1', 'w@pawn2',  null, null, null, null,  'b@pawn2', 'b@knight1'],
				 C : ['w@bishop1', 'w@pawn3',  null, null, null, null, 'b@pawn3', 'b@bishop1'],
				 D : ['w@queen1', 'w@pawn4',  null, null, null, null,  'b@pawn4', 'b@queen1'],
				 E : ['w@king1', 'w@pawn5',  null, null, null, null,  'b@pawn5', 'b@king1'],
				 F : ['w@bishop2', 'w@pawn6',  null, null, null, null,  'b@pawn6', 'b@bishop2'],
				 G : ['w@knight2', 'w@pawn7',  null, null, null, null,  'b@pawn7', 'b@knight2'],
				 H : ['w@rock2', 'w@pawn8',  null, null, null, null,  'b@pawn8', 'b@rock2'],
			},
			whitePieceOnBoard : {
				rock1: { id: "w@rock1", loc : "A1", type: "rock"},
				rock2: { id: "w@rock2", loc : "H1", type: "rock"},
				knight1: { id: "w@knight1", loc: "B1", type: "knight"},
				knight2: { id: "w@knight2", loc: "G1", type: "knight"},
				bishop1: { id: "w@bishop1", loc: "C1", type: "bishop"},
				bishop2: { id: "w@bishop2", loc: "F1", type: "bishop"},
				queen1: { id: "w@queen1", loc: "D1", type: "queen"},
				king1: { id: "w@king1", loc: "E1", type: "king"},
				pawn1: { id: "w@pawn1", loc : "A2", type: "pawn"},
				pawn2: { id: "w@pawn2", loc : "B2", type: "pawn"},
				pawn3: { id: "w@pawn3", loc: "C2", type: "pawn"},
				pawn4: { id: "w@pawn4", loc: "D2", type: "pawn"},
				pawn5: { id: "w@pawn5", loc: "E2", type: "pawn"},
				pawn6: { id: "w@pawn6", loc: "F2", type: "pawn"},
				pawn7: { id: "w@pawn7", loc: "G2", type: "pawn"},
				pawn8: { id: "w@pawn8", loc: "H2", type: "pawn"}
			},

			blackPieceOnBoard : {
				rock1: { id: "b@rock1", loc : "A8", type: "rock"},
				rock2: { id: "b@rock2", loc : "H8", type: "rock"},
				knight1: { id: "b@knight1", loc: "B8", type: "knight"},
				knight2: { id: "b@knight2", loc: "G8", type: "knight"},
				bishop1: { id: "b@bishop1", loc: "C8", type: "bishop"},
				bishop2: { id: "b@bishop2", loc: "F8", type: "bishop"},
				queen1: { id: "b@queen1", loc: "D8", type: "queen"},
				king1: { id: "b@king1", loc: "E8", type: "king"},
				pawn1: { id: "b@pawn1", loc : "A7", type: "pawn"},
				pawn2: { id: "b@pawn2", loc : "B7", type: "pawn"},
				pawn3: { id: "b@pawn3", loc: "C7", type: "pawn"},
				pawn4: { id: "b@pawn4", loc: "D7", type: "pawn"},
				pawn5: { id: "b@pawn5", loc: "E7", type: "pawn"},
				pawn6: { id: "b@pawn6", loc: "F7", type: "pawn"},
				pawn7: { id: "b@pawn7", loc: "G7", type: "pawn"},
				pawn8: { id: "b@pawn8", loc: "H7", type: "pawn"}
			},

			isWhiteTurn: true,

			selectedPiece: null,

			posTiles: new Set(),
		}

	)

}





export const initTestBoard = () => {

	return (

		{
			board : {
				 A : new Array(8).fill(null),
				 B : new Array(8).fill(null),
				 C : new Array(8).fill(null),
				 D : [null, null, null, null, 'w@pawn5', null, null, null],
				 E : new Array(8).fill(null),
				 F : new Array(8).fill(null),
				 G : new Array(8).fill(null),
				 H : new Array(8).fill(null),
			},
			whitePieceOnBoard : {
				pawn5: { id: "w@pawn5", loc: "D5", type: "pawn"},
			},

			blackPieceOnBoard : {

	
			},

			isWhiteTurn: true,

			selectedPiece: null,

			posTiles: new Set(),
		}

	)


}