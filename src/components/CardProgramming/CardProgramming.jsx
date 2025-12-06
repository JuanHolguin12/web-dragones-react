import React from 'react'

export function CardProgramming(props) {
    const { info } = props
    const params = {
        'day': 0,
        'hour': 1,
        'localTeam': 2,
        'pointsLocal': 3,
        'pointsVisit': 4,
        'visitTeam': 5,
        'category': 6,
        'court': 7
    }
    console.log(info);

    return (
        <div className='card-programming'>
            <div className=''>
                <div className='d-flex justify-content-between'>
                    <p>
                        {info[params.day]} - {info[params.hour]}
                    </p>
                    <span className={`status-game ${info[params.pointsLocal] == '' || info[params.pointsVisit] == '' ? "no-finalized" : "finalized"}`}> {info[params.pointsLocal] == '' || info[params.pointsVisit] == '' ? "Por Jugar" : "Finalizado"}</span>
                </div>
                <div className='scores'>
                    <p>
                        {info[params.localTeam]}
                    </p>
                    <span>{info[params.pointsLocal] == '' ? "0" : info[params.pointsLocal]} - {info[params.pointsVisit] == '' ? "0" : info[params.pointsVisit]} </span>
                    <p>
                        {info[params.visitTeam]}
                    </p>
                </div>
            </div>
        </div>
    )
}
