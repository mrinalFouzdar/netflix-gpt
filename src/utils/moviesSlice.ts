import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    trailerVideo: null,

  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = state.nowPlayingMovies
      ? [...state.nowPlayingMovies, ...action.payload]
      : action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies = state.popularMovies
      ? [...state.popularMovies, ...action.payload]
      : action.payload;
    },
    addTopRatatedMovies:(state,action)=>{
      state.topRatedMovies = state.topRatedMovies
      ? [...state.topRatedMovies, ...action.payload]
      : action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies = state.upcomingMovies
      ? [...state.upcomingMovies, ...action.payload]
      : action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatatedMovies ,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
