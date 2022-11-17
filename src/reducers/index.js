import {GET_FILMS, RECEIVED_FILMS} from '../actions/index';

const reducer = (state = {films: [], loading: true}, action) => {
    switch (action.type) {
        case GET_FILMS:
            return { ...state, loading: true };
        case RECEIVED_FILMS:
            return { ...state, films: action.films, loading: false }
        default:
            return state;
    }
};
  
export default reducer;