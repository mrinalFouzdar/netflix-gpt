import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesName : null,
    movieResults:null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult:(state,action)=>{
      const {moviesName , movieResults}= action.payload
      state.moviesName = moviesName;
      state.movieResults= movieResults
    }
  },
});

export const { toggleGptSearchView,addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
