import React from 'react'

import './header.scss'

function Header(){

    const [navIsOpen, setNavIsOpen] = React.useState(false)

    function navbarClickHandler(){
        setNavIsOpen(!navIsOpen)
    }

    return(
        <header>
            <div className="header__content">
                <img src="/img/Logo.png" alt="logo" />

                <div style={navIsOpen ? {} : {visibility:'hidden', height:"0px"}}  className="header__info-block">
                    <span>Почему это важно</span>
                    <span>Как всё изменится</span>
                    <span>О сервисе</span>
                </div>

                <div style={navIsOpen ? {} : {visibility:'hidden', height:"0px"}} className="header__button">
                    <span>Присоединиться</span>
                </div>

                <div onClick={()=>navbarClickHandler()} className="burger">
                    
                </div>

            </div>
            
            
            <div className="line"></div>
        </header>
    )
}

export default Header