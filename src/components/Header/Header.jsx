import React from 'react'
import './Header.css'
import header from '../images/header.png'

const Header = (props) => {

    const {headTitle, headExpand, textExpand} = props;

    return (
        <div className="heading">
            <img className={`header-img ${headExpand ? "header-img-expanded" : "header-img-contracted"} `} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="headerImage"></img>
            <h1 className={`headingText ${textExpand ? "headingText-expand" : "headingText-contract"}`}><span className="karan">Naam</span>Karan !</h1>
        </div>
    )
}

export default Header
