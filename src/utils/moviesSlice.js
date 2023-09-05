import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        popular:null,
        topRated:null,
        upComing:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        addPopular:(state,action)=>{
            state.popular=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addUpComing:(state,action)=>{
            state.upComing=action.payload;
        },
    }
})


export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailer,addPopular,addTopRated,addUpComing}=moviesSlice.actions;
