import "./world.scss"

function World(){
    return(
        <div className="world">
            <div className="world__title">
                <span>Как изменится мир</span>
                <p>после перехода на «зелёную» энергетику</p>
            </div>

            <ul>
                <li>
                    <span>01</span>
                    <div className="world__line"></div>
                    <p>Уменьшится воздействие на окружающую среду, поскольку ВИЭ не выделяют загрязняющие вещества или парниковые газы</p>
                </li>
           
                <li>
                    <span>02</span>
                    <div className="world__line"></div>
                    <p>Инвестиции в «зелёную» энергетику помогут создать рабочие места и поддержать развитие новых технологий и инфраструктуры</p>
                </li>
     
                <li>
                    <span>03</span>
                    <div className="world__line"></div>
                    <p>Экономия средств в долгосрочной перспективе, поскольку стоимость технологий ВИЭ продолжает снижаться</p>
                </li>
   
                <li>
                    <span>04</span>
                    <div className="world__line"></div>
                    <p>Снизится зависимость от ископаемого топлива, которое часто поступает из политически нестабильных или враждебных регионов</p>
                </li>
            </ul>
        </div>
    )
}

export default World