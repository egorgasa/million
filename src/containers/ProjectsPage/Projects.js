import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionAge from '../../components/sectionProjectEveryAge'
import data from './data'

export default function Projects() {

    return (<>
            <Header/>
            <SectionAge
            value={data}
            />
            <Footer/>
        </>
    )
}