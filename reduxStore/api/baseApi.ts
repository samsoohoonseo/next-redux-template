import { ReduxState } from '@/reduxStore/store'

import { API_URL } from '@/app/constants/environment'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { expired, updateAccessToken } from '../slices/authSlice'
// import { RefreshTokenResponse } from './types'
// import { AUTHENTICATION_PREFIX, V1_PREFIX } from './constants'
// import * as ResStrings from '@/constants/GuiStrings'
// import { Mutex } from 'async-mutex'

/* Simple baseQuery to update header with accessToken. Modify as needed. */
export const baseQuery = fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: (headers, { getState }) => {
        const { accessToken } = (getState() as ReduxState).auth
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`)
        }
        return headers
    },
})
