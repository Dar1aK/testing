import axios from "axios";

import {GET_DOGS_REQUEST, GET_DOGS_SUCCESS, GET_DOGS_FAIL} from '../constants/dogs'

export const getDog = () => {
    return (dispatch: any) => {
        dispatch({ type: GET_DOGS_REQUEST })

        return axios.get('https://dog.ceo/api/breeds/image/random')
        .then(({ data }) => dispatch({ type: GET_DOGS_SUCCESS, payload: data.message }))
        .catch((error) => dispatch({type: GET_DOGS_FAIL, payload: error}))
    }
}