import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchMovieList() {
    console.log('in fetchMovieList saga');
    const movieList = yield axios.get('/movies')
    yield put({type: 'STORE_MOVIE_LIST', payload: movieList.data})
}

function* fetchRecommendations(action) {
    console.log('in fetchRecommendations saga')
    const recommendationList = yield axios.get(`/movies/recommendations/${action.payload.toString()}`)
    console.log('pairwise',recommendationList.data)
    yield put({type: 'STORE_RECOMMENDATIONS', payload: recommendationList.data})
}

function* fetchSvdRecommendations(action) {
    console.log('in fetchSvdRecommendations', action.payload);
    const svdRecommendationList = yield axios.get(`/movies/recommendations/SVD/${action.payload.toString()}`)
    console.log('SVD',svdRecommendationList)
    yield put({type: 'STORE_SVD_RECOMMENDATIONS', payload: svdRecommendationList.data})
    
}


function* movieSaga() {
    yield takeEvery('FETCH_MOVIE_LIST', fetchMovieList)
    yield takeEvery('FETCH_RECOMMENDATIONS', fetchRecommendations)
    yield takeEvery('FETCH_SVD_RECOMMENDATIONS', fetchSvdRecommendations)
}

export default movieSaga;