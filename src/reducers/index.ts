import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from '../index'

import coffeeReducer from './coffee'
import dogsReducer from './dogs'

export default combineReducers({
    coffeeReducer,
    dogsReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type GetState = () => RootState;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector