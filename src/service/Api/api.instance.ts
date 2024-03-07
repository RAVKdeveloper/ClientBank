import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SERVERAPI } from '@/src/config/server.config' 



export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${SERVERAPI}` }),
    endpoints: builder => ({})
})


export default api.reducer