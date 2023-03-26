import "./greenEnergy.scss"

function GreenEnergy(){
    return(
        <div className="greenenergy">

            <div className="greenenergy__title">
                <span>«Зелёная» энергия — </span>
                <p>электроэнергия, полученная от возобновляемых источников энергии (ВИЭ)</p>
            </div>

            <div className="greenenergy__photo-block">
                <div className="greenenergy__photo-container">

                </div>

                <div className="greenenergy__electrostations">
                    <ul>
                        <li>
                            <img src="/img/wind-energy.svg" alt="wind"/>
                            <span>ветряные электростанции</span>
                        </li>
                        <li>
                            <img src="/img/sun-energy.svg" alt="sun"/>
                            <span>солнечные электростанции</span>
                        </li>
                        <li>
                            <img src="/img/hydro-energy.svg" alt="hydro"/>
                            <span>гидро-электростанции</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GreenEnergy