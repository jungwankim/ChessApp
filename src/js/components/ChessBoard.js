import Tile from "./Tile";

export default class ChessBoard extends React.Component {

	constructor(props) {
		super(props);
	}

	renderBoard(board) {
		return (

			Object.keys(board).map ( (key) => {

				let value = board[key];

				return (

					<div className={'row ' + key} key = {key}>

						{
							
							value.map( (el, index) => {

								let tileIndex = key + (index + 1);

								return (

									<Tile key = {tileIndex} id = {tileIndex} display = {this.props.posTiles.has(tileIndex)} piece = {el} clickHandler={this.props.clickHandler}/>

								)

							})
						}

					</div>

				)

			})

		);
	}

	render() {
		return (
			<div className = "chess-board">
				{ this.renderBoard(this.props.board) }
			</div>

		);
	}
}
