import React from 'react'
import NameCard from '../NameCard/NameCard';
import './Results.css'

const Results = ({suggestedNames}) => {

    const suggestNameJsx = suggestedNames.map((suggestedName, idx) => {
        return <NameCard key={idx} suggestName={suggestedName}/>
    });

    return (
        <div className="result-container">
            {suggestNameJsx}
        </div>
    )
}

export default Results
