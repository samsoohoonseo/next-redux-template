import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthState } from './types'
import { AuthResponse } from '@/reduxStore/api/types'

export const initialState: AuthState = {
    accessToken: null,
    userRole: undefined,
    userEmail: undefined,
    logoutState: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setInitialLoginCredentials: (
            state,
            { payload }: PayloadAction<AuthResponse>,
        ) => {
            state.accessToken = payload.accessToken
            state.userEmail = payload.deliveredTo
            state.userRole = payload.tokenType as UserRole
        },
        // setCredentials: (
        //     state,
        //     { payload }: PayloadAction<MfaVerifyResponse>,
        // ) => {
        //     state.accessToken = payload.accessToken
        // },
        // updateAccessToken: (
        //     state,
        //     { payload }: PayloadAction<RefreshTokenResponse>,
        // ) => {
        //     const authUser = getParsedJwt<AuthJwt>(payload.accessToken)
        //     state.accessToken = payload.accessToken
        //     state.userRole = authUser?.userType
        // },
        logout: (state) => {
            typeof window !== 'undefined' &&
                localStorage.removeItem('isLoggedIn')
            state.logoutState = 'logout'
        },
        expired: (state) => {
            state.logoutState = 'expired'
        },
    },
})

export const {
    // setInitialLoginCredentials,
    // setCredentials,
    // updateAccessToken,
    logout,
    expired,
} = slice.actions

export default slice.reducer
