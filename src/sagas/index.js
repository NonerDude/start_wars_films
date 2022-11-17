import { put, takeLatest, all } from 'redux-saga/effects';
import {GET_FILMS, RECEIVED_FILMS} from '../actions/index';

function* fetchFilms() {  
    const json = yield fetch('https://swapi.dev/api/films').then(response => response.json());
    yield put({ type: RECEIVED_FILMS, films: json.results });
}

function* actionWatcher() {
     yield takeLatest(GET_FILMS, fetchFilms)
}

export default function* rootSaga() {
   fetchFilms()
   yield all([
   actionWatcher(),
   ]);
}