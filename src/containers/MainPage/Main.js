import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import FirstSlider from "../../components/firstSlider";
import AboutUs from "../../components/aboutUs";
import OurServices from "../../components/ourServices";
import HistoryCompany from "../../components/historyCompany";
import Project from '../../components/projectInWork'


export default function MainPage() {

    return (<>
            <Header/>
            <FirstSlider/>
            <AboutUs/>
            <HistoryCompany/>
            <OurServices/>
            <Project/>
            <Footer/>
            </>
    )
}