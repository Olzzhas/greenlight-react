import "./instructions.scss"

function Instuctions(){
    return(
        <div className="instructions">
            <div className="instructions__title">
                <span>С GreenLight</span>
                <p>можно заботиться об экологии в несколько кликов</p>
            </div>

            <div className="instructions__step">
                <div>
                    <p>01</p>
                    <span>Зайдите на сервис или в мобильное приложение</span>
                </div>
                <div className="instructions__photo-container">
                    <img src="/img/screen_1.png" alt="screen1" />
                </div>
            </div>

            <div className="instructions__step">
                <div>
                    <p>02</p>
                    <span>Выберите электростанцию и введите количество энергии</span>
                </div>
                <div className="instructions__photo-container">
                    <img src="/img/screen_2.png" alt="screen2" />
                </div>
            </div>

            <div className="instructions__step">
                <div>
                    <p>03</p>
                    <div className="instructions__text">
                        <span>Оплатите энергию</span>
                        <h1>Деньги зачислятся на баланс и спишутся через месяц за использованную энергию</h1>
                    </div>
                </div>
                <div className="instructions__photo-container">
                    <img src="/img/screen_3.png" alt="screen3" />
                </div>
            </div>

            <div className="instructions__step">
                
                <div className="instructions__text">
                    <p>04</p>
                    <h1>В квитанции ком. услуг будет счёт за обычную электроэнергию, потраченную сверх «зелёной»</h1>
                </div>

                <div className="instructions__photo-container"></div>
            </div>

        </div>
    )
}

export default Instuctions  