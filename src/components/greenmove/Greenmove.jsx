import './greenmove.scss'

function Greenmove(){
    return(
        <div className='greenmove'>
            <div className="sun">
                <img src="/img/sun.png" alt="sun" />
            </div>
            <div className="greenmove__title">
                <span>Переходите на «зелёную» энергию и помогайте окружающей среде</span>
            </div>

            <div style={{width:"100%", display:"flex", marginTop:"370px"}}>
                <div className="greenmove__bottom-info">
                    <p>GreenLight — доступный сервис для покупки «зелёной» энергии</p>
                    <div className="greenmove__button">
                        <span>Хочу попробовать</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greenmove