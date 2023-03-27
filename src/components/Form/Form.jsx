import "./form.scss"

function Form(){
    return(
        <div className="form">
            <div className="form__title">
                <span>Внесите свой <br /> положительный вклад в экологию  </span>
                <div className="form__greenlight">
                    <img src="/img/arrow.svg" alt="arrow" />
                    <p>вместе с GreenLight </p>
                </div>
            </div>

            <div className="form__content">
                <h1>Заполните форму, а <span>когда сервис будет запущен</span>, мы напишем вам письмо</h1>
                <div className="form__form">
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="text" placeholder="Ваш email*" />
                    <button>Отправить</button>
                    <h2>Нажимая на кнопку «Отправить», вы принимаете <a href="#">политику конфиденциальности</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Form