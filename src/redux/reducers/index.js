import { combineReducers } from 'redux';
import movieList from './movieListReducer'
import recommendations from './recommendationReducer'
import svdRecommendations from './svdRecommendationReducer'

const rootReducer = combineReducers({
    movieList, // stores list of all movies
    recommendations, // stores recommended movies
    svdRecommendations, // stores ML SVD algo recommendations
});

export default rootReducer;