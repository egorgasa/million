import React from "react";
import Card from "../Card";
import './cardProject.css'

export default function CardProjectSection(props) {

    const {value, id} = props;

    return (
        <>
            <div className="sectionProject-id">
                <p>{id}</p>
            </div>

            <div className='sectionProject'>

                {value.map((val) => <Card content={val}/>)}
            </div>

        </>
    )
}