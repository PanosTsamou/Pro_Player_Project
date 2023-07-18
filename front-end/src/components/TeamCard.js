import React from 'react'
import { useNavigate } from 'react-router-dom'

const TeamCard = ({ team }) => {

    const navigate = useNavigate();

    const handleOnClickTeam = () => {
        navigate(`/teams/${team.id}`)
    }

    return (
        <>
            <div style={{ width: "30%" }} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={team.badge} alt={team.name} className="rounded-xl w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{team.name}</h2>
                    <div className="grid grid-rows-1 grid-flow-col gap-3">
                        <div className="border-solid border-2 border-indigo-600 p-2 rounded-lg">
                        <p>OVR</p>
                        <div>{team.ovr}</div>
                        </div>
                        <div className="border-solid border-2 border-yellow-600 p-2 rounded-lg">
                        <p>DEF</p>
                        <div>{team.defe}</div>
                        </div>
                        <div className="border-solid border-2 border-green-600 p-2 rounded-lg">
                        <p>MID</p>
                        <div>{team.mid}</div>
                        </div>
                        <div className="border-solid border-2 border-blue-600 p-2 rounded-lg">
                        <p>ATT</p>
                        <div>{team.att}</div>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={handleOnClickTeam}>See team</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard