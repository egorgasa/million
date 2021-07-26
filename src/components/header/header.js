import React, {Component} from 'react';
import logo from '../../img/Logo.png'
import './header.css'
import {slide as Menu} from 'react-burger-menu';
import {Link} from "react-router-dom";
export default class Header extends Component {


    render() {
        return (
            <div className='container header'>
                <div className="header-wrapper">
                    <a href="">
                        <img src={logo} alt="LOGO"/>
                    </a>

                    <nav>
                        <ul>
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/projects'>Проекты</Link></li>
                            <li><Link to='/'>О Компании</Link></li>
                            <li><Link to='/'>Контакты</Link></li>
                        </ul>
                    </nav>
                    <div className="burger">
                        <Menu right noOverlay={true} className={"my-menu"} width={'100%'} height={'100%'}
                              bodyClassName={"my-class"} menuClassName={"my-class"} burgerBarClassName={"my-class"}
                              burgerButtonClassName={"my-class"}>
                            <a id="home" className="menu-item" href="/">Home</a>
                            <a id="about" className="menu-item" href="/about">About</a>
                            <a id="contact" className="menu-item" href="/contact">Contact</a>
                        </Menu>
                    </div>


                </div>
            </div>
        )
    }
}

