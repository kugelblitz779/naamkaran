import React from 'react'
import './SearchBox.css'

const SearchBox = ({onInputChange}) => {

    return (
        <div className="search-box-div">
            <input onChange={(e) => onInputChange(e.target.value)} placeholder="type keywords..." className="search-input"/>
        </div>
    )
}

export default SearchBox
