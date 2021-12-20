import axios from "axios";
import { Dispatch } from 'redux'

import {CoffeeItem} from '../types/coffee'
import {GetState} from '../reducers'
import {GET_COFFEE_REQUEST, GET_COFFEE_SUCCESS, GET_COFFEE_FAIL, CHANGE_COFFEE_COUNT} from '../constants/coffee'

export const getCoffee = () => {
    return (dispatch: Dispatch, getState: GetState) => {
        dispatch({ type: GET_COFFEE_REQUEST })

        const {count}  = getState().coffeeReducer

        return axios.get('https://random-data-api.com/api/coffee/random_coffee', {
            params: {
                size: count
            }
          })
        .then(({ data }) => {
            const payload = data.map((item: CoffeeItem) => {
                const notes = item.notes.split(', ')
                return {...item, notes}
            })
            dispatch({ type: GET_COFFEE_SUCCESS, payload })
        })
        .catch((error) => dispatch({type: GET_COFFEE_FAIL, payload: error}))
    }
}

export const changeCoffeeCount = (count: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CHANGE_COFFEE_COUNT, payload: count })
    }
}