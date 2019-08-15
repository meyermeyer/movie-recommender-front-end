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
    yield put({type: 'STORE_RECOMMENDATIONS', payload: recommendationList.data})
}


function* movieSaga() {
    yield takeEvery('FETCH_MOVIE_LIST', fetchMovieList)
    yield takeEvery('FETCH_RECOMMENDATIONS', fetchRecommendations)
}

export default movieSaga;