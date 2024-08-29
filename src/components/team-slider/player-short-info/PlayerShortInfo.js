import './player-short-info.scss'

function PlayerShortInfo(props) {
    return (
        <div className="player-short-info">
            {props.info}
        </div>
    )
}

export default PlayerShortInfo;