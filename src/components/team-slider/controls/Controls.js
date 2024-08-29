import './controls.scss';

function Controls(props) {

    return (
        <div className="controls">
            <button onClick={props.prev} className='btn-prev'></button>
            <div className='counter'>{props.counter}</div>
            <button onClick={props.next} className='btn-next'></button>
        </div>
    )
}

export default Controls;