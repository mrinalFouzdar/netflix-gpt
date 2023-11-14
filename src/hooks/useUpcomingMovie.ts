import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect, useState } from "react";
import { API_CONSTANT } from "../utils/constants";

const useUpcomingMovie = () => {
  const dispacth = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const [fetchedPages, setFetchedPages] = useState<number[]>([]);
  const getupComingMovieList = async () => {
    if (fetchedPages.includes(page)) {
      return;
    }
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
      API_CONSTANT
    );
    let json = await data.json();
    // console.log(json.results);
    setFetchedPages((prevPage) => [...prevPage, page]);
    dispacth(addUpcomingMovies(json.results));
  };

  const handlePageNumberupComingMovies = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page > 1) getupComingMovieList();
  }, [page]);

  return { handlePageNumberupComingMovies, getupComingMovieList };
};

export default useUpcomingMovie;
