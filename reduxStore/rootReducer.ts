import { Action, combineReducers } from 'redux'
import { createAction } from '@reduxjs/toolkit'

/* Custom Reducers */
import authReducer from './slices/authSlice'
// import userReducer from './slices/userSlice'

/* Api */
import { projectApi } from './api/projectApi'

type AppReducer = ReturnType<typeof combinedReducer>
const resetState = createAction('resetState')

/* Add additional reducers below */
const combinedReducer = combineReducers({
    auth: authReducer,
    // user: userReducer,
    [lunaApi.reducerPath]: lunaApi.reducer,
})

export const rootReducer = (
    rootState: AppReducer | undefined,
    action: Action,
) => {
    if (action.type == resetState.name) {
        rootState = undefined
    }
    return combinedReducer(rootState, action)
}
