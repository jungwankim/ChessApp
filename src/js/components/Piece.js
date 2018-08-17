
export default class Piece extends React.Component {

	constructor(props) {
		super(props);
	}

	renderPiece (player, type) {
		switch (type.slice(0,-1)) {
			case 'pawn':
				return (
					<img src={"images/" + player + "pawn.svg"}/>
				);
				break;
			case 'knight':
				return (
					<img src={"images/" + player + "knight.svg"}/>
				);
				break;
			case 'bishop':
				return (
					<img src={"images/" + player + "bshop.svg"}/>
				);
				break;
			case 'rock':
				return (
					<img src={"images/" + player + "rock.svg"}/>
				);
				break;
			case 'queen':
				return (
					<img src={"images/" + player + "queen.svg"}/>
				);
				break;
			case 'king':
				return (
					<img src={"images/" + player + "king.svg"}/>
				);
				break;
			default:
				return;
				break;
		}
	}

	render() {
		return (
			<div className="piece">
				{this.renderPiece(this.props.player, this.props.piece)}
			</div>
		);
	}
}
