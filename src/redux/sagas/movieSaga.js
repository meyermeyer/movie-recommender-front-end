import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchMovieList() {
    console.log('in fetchMovieList saga');
    const movieList = yield axios.get('/movies')
    yield put({type: 'STORE_MOVIE_LIST', payload: movieList.data})
}


function* movieSaga() {
    yield takeEvery('FETCH_MOVIE_LIST', fetchMovieList)
}

export default movieSaga;