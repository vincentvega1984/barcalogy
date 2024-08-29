import { useState } from 'react';

import data from '../../data/dynamic/la-liga-standings.json';

import TeamPopup from '../team-popup/TeamPopup';

import './table.scss';

function Table () {
    const [teamData, setTeamData] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const standings = data;

    function handleTeamData(team, form, logo) {

        setTeamData({
            ...teamData, 
            teamName: team,
            teamForm: form,
            teamLogo: logo
        })

        setIsOpen (!isOpen)
    }

    const arr = standings.map((team) => {
        const rowCssClass = team.team.name === 'Barcelona' ? 'highlighted' : '';

        return (
            <tr key={team.rank} className={rowCssClass}>
                <td>{team.rank}</td>
                <td className="team">
                    <div>
                        <img src={team.team.logo} alt={team.team.name} />
                        <button onClick={() => handleTeamData(team.team.name, team.form, team.team.logo)}>
                            {team.team.name}
                        </button>
                    </div>
                </td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>{team.all.goals.for}</td>
                <td>{team.all.goals.against}</td>
                <td>{team.points}</td>
            </tr>
        )
    })

    return (
        <>
            <table className="standings">
                <thead>
                    <tr>
                        <th></th>
                        <th>Team</th>
                        <th>Games</th>
                        <th>Wins</th>
                        <th>Draws</th>
                        <th>Lose</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
            {isOpen && <TeamPopup name={teamData.teamName} form={teamData.teamForm} logo={teamData.teamLogo} close={() => setIsOpen (!isOpen)}/>}
        </>
    )
}

export default Table;