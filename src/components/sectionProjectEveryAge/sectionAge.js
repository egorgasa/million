import React from "react";
import CardProjectSection from "../CardProject";
import './sectionProjectEveryAge.css'
import ScrollBar from "../scrollProjectBar/scrollBar";

export default function EveryAge(props) {
    const {value} = props;

    const allId = value.map((project) => project.id)

    return (
        <section className='projects-container container'>
            <div className='sectionAge container'>
                {value.map((project, index) => <CardProjectSection key={index} id={project.id}
                                                                   value={project.projects}/>)}
            </div>
            <div className='scroll'>
                <ScrollBar id={allId}/>
            </div>
        </section>

    )
}