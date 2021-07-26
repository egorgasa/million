import React from 'react';
import './projectInWork.css';

function projectInWork() {

    return (
        <div className='projectInWork'>
            <div className="container projectsIn">
            <div className="projectInWork-wrapper">

                <div className="projectInWork-header">
                    <p>проекты в работы</p>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <div>
                                <p>DUCAT PLACE III</p>
                                <p>г. Мocквa, yл. Γaшeкa, 6</p>
                                <div className='strelkaProject'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div>
                                <p>Renaissance </p>
                                <p>г. Москва, Ленинградский пр, вл.31</p>
                                <div className='strelkaProject '>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div>
                                <p>сколково парк</p>
                                <p>Московская обл., Одинцовский р-н, р.п. Заречье</p>
                                <div className='strelkaProject'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>)
}

export default projectInWork;