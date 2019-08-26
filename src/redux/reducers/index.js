import { combineReducers } from 'redux';
import movieList from './movieListReducer'
import recommendations from './recommendationReducer'
import svdRecommendations from './svdRecommendationReducer'
import nmfRecommendations from './nmfRecommendationReducer'

const rootReducer = combineReducers({
    movieList, // stores list of all movies
    recommendations, // stores recommended movies
    svdRecommendations, // stores machine learning SVD algo recommendations
    nmfRecommendations, // stores machine learning NMF algo recommendations
});

export default rootReducer;