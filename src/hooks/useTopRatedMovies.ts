import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import {  addTopRatatedMovies } from "../utils/moviesSlice";
import { useEffect, useState } from "react";
import { API_CONSTANT } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispacth = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const [fetchedPages, setFetchedPages] = useState<number[]>([]);
  const getTopRatedMovieList = async () => {
    if(fetchedPages.includes(page)){
      return
    }
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
      API_CONSTANT
    );
    let json = await data.json();
    console.log(json.results);
    setFetchedPages((prevPage) => [...prevPage, page]);
    dispacth(addTopRatatedMovies(json.results));
  };

  const handlePageNumberTopRatedMovies = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page > 1) getTopRatedMovieList();
  }, [page]);

  return {handlePageNumberTopRatedMovies,getTopRatedMovieList}
};

export default useTopRatedMovies;
