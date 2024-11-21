import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import facenetReducer from '../features/auth/facenetSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        facenet: facenetReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
