import React from 'react';
import './firstSlider.css'
import Pagination from "../paginationFirstSlider";
import FirstSliderContent from '../firstSliderContent'
import notesAction from '../../redux/paginationFirstSlider/action'
import {useSelector, useDispatch} from 'react-redux';

const {changeNote} = notesAction;

function FirstSlider() {

    const {slider, selectedId} = useSelector(
        (state) => state.slider
    );

    const dispatch = useDispatch();


    const selectedNote =
        selectedId !== undefined
            ? slider.filter((note) => note.id === selectedId)[0]
            : null;

    return (
        <div className='firstSlider'>
            <Pagination
                slider={slider}
                selectedId={selectedId}
                changeNote={(id) => dispatch(changeNote(id))}
            />
            <FirstSliderContent
                value={selectedNote}
            />

        </div>
    )
}

export default FirstSlider;






