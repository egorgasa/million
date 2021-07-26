import React from "react";


function filterNotes(notes, search) {
    search = search.toUpperCase();
    if (search) {
        return notes.filter((note) => note.note.toUpperCase().includes(search));
    }
    return notes;
}

export default function (props) {

    const [search, setSearch] = React.useState('');

    function Pagination(slider) {

        const {selectedId, changeNote} = props;
        const onChange = () => changeNote(slider.id);

        return (

            <div className='paginationFirstSlider-pagination'>
                <img src={slider.imgPrev} alt=""
                     onClick={onChange}
                />
            </div>)
    }

    const slider = filterNotes(props.slider, search);

    return (
        <> {slider && slider.length > 0 ? (
                <div className='firstSlider-pagination'>{slider.map((note) => Pagination(note))}</div>)
            : (<span className="isoNoResultMsg">No note found</span>)}
        </>
    )
}

