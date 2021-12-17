import {GET_DOGS_REQUEST, GET_DOGS_SUCCESS, GET_DOGS_FAIL} from '../constants/dogs'

const initialState = {
    error: null,
    isLoading: false,
    url: null,
}

const dogsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case GET_DOGS_REQUEST:
            return {...state, isLoading: true }

        case GET_DOGS_SUCCESS:
            return {...state, isLoading: false, url: action.payload }

        case GET_DOGS_FAIL:
            return {...state, isLoading: false, error: action.payload }

        default:
            return state;
    }
}

export default dogsReducer;