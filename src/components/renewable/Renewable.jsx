import './renewable.scss'

function Renewable(){
    return(
        <div className='renewable'>
            <div className="renewable__title">
                <span>Почему важен</span>
                <p>переход на возобновляемую энергетику</p>
            </div>

            <div className="renewable__content">
                <div className="renewable__rating">
                    <span>64 место</span>
                    <p>это последнее место в рейтинге за 2022 год</p>
                </div>

                <div className="renewable__stats">
                    <div className="renewable__line"></div>
                    <p>Казахстан входит в <span>ТОП-15 стран</span> по выбросу CO2</p>
                    <div className="renewable__line"></div>
                    <p><span>30% заболеваний</span> — болезни органов дыхания</p>
                    <div className="renewable__line"></div>
                    <p>В 2022 г. Казахстан занял <span>64 место</span> в рейтинге CCPI*</p>
                    <div className="renewable__line"></div>
                    <span className='ccpi'>*CCPI — индекс эффективности борьбы с изменением климата</span>
                </div>
            </div>
        </div>
    )
}

export default Renewable