import React from "react";
import './card.css'


export default function Card(props) {
    const {content} = props;
    const {img, name, address} = content;

    return (
        <div className='card'>
            <a href="">
                <img src={img} alt=""/>
                <p>{name}</p>
                <a href="#">{address}</a>
            </a>
        </div>
    )
}
