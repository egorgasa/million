import React from 'react';
import './footer.css'


function Footer() {
    return (
        <div className='footer container '>
            <div className="footer-wrapper">
                <div className="footer-header"><p>Связаться с нами</p></div>
                <div className="footer-nav">
                    <div><p>©1996-2021 ГК «Компьютролс»</p></div>
                    <div><a href="tel:+7 (495) 787-25-78">+7 (495) 787-25-78</a></div>
                    <div><a href="mail:info@computrols.ru">info@computrols.ru</a></div>
                </div>
            </div>
            
            <div className="developer">
                <p>Разработка и продвижение </p><img src="" alt="CMbox"/>
            </div>
        </div>
    )
}

export default Footer;