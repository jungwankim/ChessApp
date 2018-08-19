import Piece from './Piece';

export default class Tile extends React.Component {
	

	constructor(props) {
		super(props);

	}

	render() {
		let piece = null;
		if (this.props.piece) {
			let [player, type] = this.props.piece.split('@');
			piece = <Piece player = {player} piece = {type} clickHandle={this.props.clickHandler.pieceClick}/>;
		}
		const getClass = (display) => {
			if (piece) {
				return (display ? 'tile enemyPosTile' : 'tile');		
			}
			return (display ? 'tile posTile' : 'tile');		
		}

		return (
			<div className= {getClass(this.props.display)} id= {this.props.id} onClick={ e => {this.props.clickHandler.tileClick(this.props.id)}}>
				{piece}
			</div>
		);
	}
}
