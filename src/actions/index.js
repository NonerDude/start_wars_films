const FILMS_PREFIX = 'FILMS_PREFIX_'
export const GET_FILMS = FILMS_PREFIX + 'GET_FILMS'
export const RECEIVED_FILMS = FILMS_PREFIX + 'RECEIVED_FILMS'
export const getFilms = () => ({
    type: GET_FILMS,
});

export const receivedFilms = ({films}) => ({
    type: RECEIVED_FILMS,
    films
});