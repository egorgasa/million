import React from 'react';
import './aboutUs.css'
import aboutUs from '../../img/aboutUs.jpg'

function AboutUs() {
    return (
        <div className="aboutUs container">
<div className="abouUs-wrapper">
                <div className="aboutUs-text">


                        <div className="aboutUs-text-header">
                            <p>О нас</p>
                        </div>

                        <div className="aboutUs-text-wrapper__content">
                            <p>Компьютролс — это репутация, уникальный коллектив и опыт</p>
                            <p>
                                За 25 лет работы на российском
                                рынке в нашем портфолио прибавилось более 50 крупномасштабных проектов
                                совокупной площадью более 1,5 млн. м2. Придерживаемся постоянного поиска инновационных
                                решений и
                                соблюдение высочайших стандартов качества.</p>
                        </div>


                </div>
                <div className="aboutUs-img">
                    <img src={aboutUs} alt="aboutUs"/>
                </div>
</div>
        </div>
    )
}

export default AboutUs;