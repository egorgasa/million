import slider from './data';
import actions from './action'

const initialState = {
    slider,
    selectedId: slider[0].id,
    active: true
}

export const paginationFirstSliderReducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.SHOW_SLIDER:

            return {
                ...state,
                selectedId: action.selectedId,
            };

        default:
            return state
    }
}