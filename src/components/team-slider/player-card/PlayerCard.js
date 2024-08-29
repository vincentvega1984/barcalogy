import './player-card.scss';

function PlayerCard(props) {

    const playerFirstName = props.player.split(' ')[0]
    const playerLastName = props.player.indexOf(' ') >= 0 ? props.player.slice(props.player.indexOf(' ') + 1) : ''
    
    return (
        <div className={props.cardClass}>
        <div className="player__wrapper">
            <div className="player__name">
                <div className="player__firstname">
                    {playerFirstName}
                </div>
                <div className="player__lastname">
                    {playerLastName}
                </div>
            </div>
            <div className='player__number'>{props.number}</div>
            <img className='player__image' src={`images/squad/${props.image}`} alt={props.player} />
        </div>
    </div>
    )
}

export default PlayerCard;