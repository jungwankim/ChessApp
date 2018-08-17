import Piece from './Piece';

export default class Tile extends React.Component {
	

	constructor(props) {
		super(props);

	}

	render() {
		let piece = null;
		if (this.props.piece) {
			let [player, type] = this.props.piece.split('@');
			piece = <Piece player = {player} piece = {type}/>;
		}

		return (
			<div className="tile" id= {this.props.id}>
				{piece}
			</div>
		);
	}
}
