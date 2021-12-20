import {GET_COFFEE_REQUEST, GET_COFFEE_SUCCESS, GET_COFFEE_FAIL, CHANGE_COFFEE_COUNT} from '../constants/coffee'

const initialState = {
    error: null,
    isLoading: false,
    count: 5,
    items: [],
}

const coffeeReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case GET_COFFEE_REQUEST:
            return {...state, isLoading: true }

        case GET_COFFEE_SUCCESS:
            return {...state, isLoading: false, items: action.payload }

        case GET_COFFEE_FAIL:
            return {...state, isLoading: false, error: action.payload }
            
            case CHANGE_COFFEE_COUNT:
                return {...state, count: action.payload }

        default:
            return state;
    }
}

export default coffeeReducer;