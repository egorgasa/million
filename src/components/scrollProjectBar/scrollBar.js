import React from "react";
import './scrollBar.css'

export default function scrollBar(props) {
    const {id} = props;

    const elements = id.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <a href="">{item}</a>
                </div>
            </div>

        )
    })

    return (
        <div className='scrollBar'>
            {elements}
        </div>)
}