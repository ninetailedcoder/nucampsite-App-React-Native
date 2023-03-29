import { configureStore } from "@reduxjs/toolkit";
import { ImageComponent } from "react-native";
import {campsitesReducer} from '../features/campsites/campsitesSlice'
import {commentsReducer} from '../features/comments/commentsSlice'
import {parnerReducer} from '../features/partners/parnersSlice'
import {promotionsReducer} from '../features/promotions promotionsSlice'

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: parnerReducer,
        promotions: promotionsReducer
    }
})