import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_CONSTANT } from "../utils/constants";

const useNowNowPlay = () => {
  const dispacth = useDispatch<AppDispatch>();
  const getMovieList = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_CONSTANT
    );
    let json = await data.json();
    console.log(json.results);
    dispacth(addPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useNowNowPlay;
