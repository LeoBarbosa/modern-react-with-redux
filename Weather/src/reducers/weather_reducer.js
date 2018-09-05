import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from './../actions/index';

const initState = {
    cidades: [],
    error: undefined
}

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, cidades: [action.payload.data, ...state.cidades], error: undefined }
        case FETCH_WEATHER_ERROR:
            return {...state, error: action.payload.response.data }
    }

    return state;
}
