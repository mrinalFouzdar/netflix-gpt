import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect, useState } from "react";
import { API_CONSTANT } from "../utils/constants";

const usePopularMovies = () => {
  const dispacth = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const [fetchedPages, setFetchedPages] = useState<number[]>([]);

  const getMovieList = async () => {
    // Check if the current page has already been fetched
    if (fetchedPages.includes(page)) {
      return;
    }
    try {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=${page}`,
        API_CONSTANT
      );
      let json = await data.json();
      // console.log(json.results, page);
      setFetchedPages((prevPages) => [...prevPages, page]);

      dispacth(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
    // setFetchData(false)
  };

  const handlePageNumber = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page > 1) {
      getMovieList();
    }
  }, [page]);

  return { handlePageNumber, getMovieList };
};

export default usePopularMovies;
