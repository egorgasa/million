const notesAction = {
    SHOW_SLIDER: 'SHOW_SLIDER',

    changeNote: id => {
        return (dispatch) => {
            dispatch({
                type: notesAction.SHOW_SLIDER,
                selectedId: id,
            });
        };
    },

};

export default notesAction;