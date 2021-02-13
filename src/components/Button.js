import React from 'react'
import '../css/Button.css'
import {Link } from 'react-router-dom'

const STYLES=['btn--outline','btn--primary'];
const SIZES=['btn--medium','btn--large'];

const Button = ({children
,buttonStyle
,buttonSize
,onClick
,type}) => {

    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize :SIZES[0]

    return (
        <Link to="/signUp" className="btn-mobile">
            <button 
            className={`btn ${checkButtonSize} ${checkButtonStyle}`} 
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button
