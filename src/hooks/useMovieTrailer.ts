import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_CONSTANT } from "../utils/constants";

const useMovieTrailer = (movieId: string) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_CONSTANT
    );
    const json = await data.json();
    // console.log(json)
    const filterData = json.results.filter(
      (movie: any) => movie.type === "Trailer"
    );
    // console.log(filterData)
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer)
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
