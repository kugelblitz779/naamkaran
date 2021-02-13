import React from 'react'
import './NameCard.css'

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({suggestName}) => {


    return (
        <a target="_blank" rel="noreferrer" className="link" href={`${nameCheapUrl}${suggestName}`}>
            <div className="name-card">
                <p className="result-name">{suggestName}</p>
            </div>
        </a>
    )
}

export default NameCard
