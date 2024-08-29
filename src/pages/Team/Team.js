import { useState } from 'react';

import data from '../../data/dynamic/barca-players-summary.json';

import PlayerShortInfo from '../../components/team-slider/player-short-info/PlayerShortInfo';
import Controls from '../../components/team-slider/controls/Controls';
import PlayerCard from '../../components/team-slider/player-card/PlayerCard';
import Table from '../../components/table/Table';

import './team.scss';

function Team () {

    const SLIDE_STEP = 400;

    const [translate, setTranslate] = useState(0);
    const [active, setActive] = useState(1);
  
    const players = data;

    const team = players.map((player, index) => {

        let playerClassName = active === index ? 'player active' : 'player';

        return (
            <PlayerCard player={player.player} key={player.number} image={player.image} cardClass={playerClassName}/>
        )
    })

    function movePrev() {
        if (active >= 1) {
            setTranslate(translate + SLIDE_STEP)
            setActive(active - 1)
        }
    }

    function moveNext() {
        if (active < players.length - 1) {
            setTranslate(translate - SLIDE_STEP)
            setActive(active + 1)
        }
    }

    return (
        <>
            <h1 className="page-title">Team</h1>
            <div className="players__track">
                <div className='players' style={{transform: `translateX(${translate}px)`}}>
                    {team}
                </div>
            </div>
            <PlayerShortInfo info={players[active].shortInfo}/>
            <Controls next={moveNext} prev={movePrev} counter={`${active + 1}/${players.length}`}/>
            <Table />
        </>
    )
}

export default Team