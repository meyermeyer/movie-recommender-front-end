import { combineReducers } from 'redux';
import movieList from './movieListReducer'

const rootReducer = combineReducers({
    movieList, // stores list of all movies
});

export default rootReducer;