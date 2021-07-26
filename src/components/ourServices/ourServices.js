import React from 'react';
import back from '../../img/OurServices/back.jpg'
import service1 from '../../img/OurServices/service1.svg';
import service2 from '../../img/OurServices/service2.svg';
import service3 from '../../img/OurServices/service3.svg';
import service4 from '../../img/OurServices/service4.svg';
import './ourServices.css';
/*
function OurServices() {
    return (
        <div className='ourServices container'>
            <div className="ourServices-header"><p>Наши услуги</p></div>
            <div className="ourServices-wrapper">
                <div className="services">
                    <div className="services__wrap">
                        <div>
                            <img src={service1} alt="service1"/>
                            <p>Энергоснабжение</p>
                        </div>
                        <div>
                            <img src={service2} alt="service2"/>
                            <p>Энергосбережение</p>
                        </div>
                        <div>
                            <img src={service3} alt="service3"/>
                            <p>Автоматизация</p>
                        </div>
                        <div>
                            <img src={service4} alt="service4"/>
                            <p>Безопасность </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

*/

function OurServices() {
    return (
        <div className="ourServices">
            <div className="container myContainer">
            <div className="container-wrapper">
                <div className="ourServices-header"><p>Наши услуги</p></div>

                <div className="services__wrap">
                    <div>
                        <img src={service1} alt="service1"/>
                        <p>Энергоснабжение</p>
                    </div>
                    <div>
                        <img src={service2} alt="service2"/>
                        <p>Энергосбережение</p>
                    </div>
                    <div>
                        <img src={service3} alt="service3"/>
                        <p>Автоматизация</p>
                    </div>
                    <div>
                        <img src={service4} alt="service4"/>
                        <p>Безопасность </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OurServices;