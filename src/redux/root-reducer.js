import {combineReducers} from "redux";
import {paginationFirstSliderReducer} from './paginationFirstSlider/paginationFirstSliderReducer';

export const rootReducer = combineReducers({
    slider:paginationFirstSliderReducer
})


