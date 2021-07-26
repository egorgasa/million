import React from "react";

export default function firstSliderContent(props) {
    const {value} = props;
    return (
        <div className='sliderIMG'>

            <div className='mainSlider'>
                <img src={value.imgMain} alt="1"/>
                <div className="sliderText">
                    <p>{value.content}</p>
                </div>
                <div className="linkToProject">
                    <a href="#">{value.nameProject}
                        <div className='strelka'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </div>
                <div className="contactsSlid">
                    <a href="#">+7 (495) 787-25-78</a>
                    <a href="#">info@computrols.ru</a>
                </div>
            </div>
        </div>
    )
}