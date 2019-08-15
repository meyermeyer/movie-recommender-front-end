import { combineReducers } from 'redux';
import movieList from './movieListReducer'
import recommendations from './recommendationReducer'

const rootReducer = combineReducers({
    movieList, // stores list of all movies
    recommendations, // stores recommended movies
});

export default rootReducer;