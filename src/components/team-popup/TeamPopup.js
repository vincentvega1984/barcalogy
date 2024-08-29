import './team-popup.scss'

function TeamPopup(props) {

    return (
        <div className="teamPopup">
            <button onClick={props.close}>×</button>
            <img src={props.logo} alt={props.name} />
            <div className="teamName">
                {props.name}
            </div>
            <div className="teamForm">
                {props.form}
            </div>
        </div>
    )
}

export default TeamPopup;