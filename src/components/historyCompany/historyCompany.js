import React from 'react';
import './historyCompany.css'
import history1 from '../../img/historyCompany/history1.jpg'
import history2 from '../../img/historyCompany/history2.jpg'


function HistoryCompany() {
    return (
        <div className='historyCompany container'>
            <div className="historyCompany-wrapper">

                <div className="ourHistory">

                    <div className="ourHistory-img">
                        <img src={history1} alt=""/>
                    </div>

                    <div className="ourHistory-text">
                        <div className="ourHistory-text-wrapper">
                            <div className="ourHistory-text-header">
                                <p>История компании</p>
                            </div>
                            <p>История ГК Компьютролс берёт начало с 1994 году </p>
                            <p>с работы над проектом – одного из первых объектов класса «А» в Москве. Сегодня мы
                                обладаем
                                инфраструктурой для выполнения полного комплекса работ по системам энергоснабжения,
                                автоматизации и безопасности зданий под ключ. </p>
                        </div>

                    </div>

                </div>

                <div className="whyAreMe">

                    <div className="whyAreMe-text">
                        <div className="whyAreMe-text-wrapper">
                            <div className="whyAreMe-text-header">
                                <p>Почему мы</p>
                            </div>
                            <p>Основные преимущества</p>
                            <ul>
                                <li>Клиентоориентированность</li>
                                <li>Адекватное ценообразование</li>
                                <li>Совершенствование внутренней эффективности</li>
                                <li>Постоянный поиск инновационных решений</li>
                                <li>Соблюдение высочайших стандартов качества</li>
                            </ul>
                        </div>
                    </div>


                    <div className="whyAreMe-img">
                        <img src={history2} alt=""/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HistoryCompany;