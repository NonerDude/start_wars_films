const CHARACTERS_PREFIX = 'CHARACTERS_PREFIX_'
export const GET_CHARACTERS_BY_URLS = CHARACTERS_PREFIX + 'GET_CHARACTERS_BY_URLS'
export const RECEIVED_CHARACTERS = CHARACTERS_PREFIX + 'RECEIVED_CHARACTERS'

export const getCharactersByUrls = (urls) => ({
    type: GET_CHARACTER,
    urls
});

export const receivedCharacters = ({films}) => ({
    type: RECEIVED_CHARACTERS,
    films
});