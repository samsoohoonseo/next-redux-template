/* Core */
import {
    configureStore,
    type ThunkAction,
    type Action,
    ConfigureStoreOptions,
} from '@reduxjs/toolkit'
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from 'react-redux'

/* Instruments */
import { rootReducer } from './rootReducer'
import { middleware } from './middleware'
import { lunaApi } from './api/lunaApi'

export const storeAttributes: ConfigureStoreOptions = {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(lunaApi.middleware)
            .concat(middleware)
    },
}

export const reduxStore = configureStore(storeAttributes)

export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

/* Types */
export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    Action
>
