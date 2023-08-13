import { createContext, useContext, useEffect, useReducer } from "react";
import { movies } from "../Data";

const DataContext = createContext();

const InitialState = {
  moviesList: [],
  watchList: [],
  category: "",
  year: "",
  rating: "",
  searchText: "",
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES": {
      return { ...state, moviesList: action.payload };
    }

    case "SET_WATCH": {
      return { ...state, watchList: action.payload };
    }

    case "SET_CATEGORY": {
      return { ...state, category: action.payload };
    }
    case "SET_YEAR": {
      return { ...state, year: action.payload };
    }
    case "SET_RATING": {
      return { ...state, rating: action.payload };
    }
    case "SET_SEARCH": {
      return { ...state, searchText: action.payload };
    }
    case "ADD_MOVIE": {
      const updatedMovieList = [...state.moviesList, action.payload];
      localStorage.setItem("movies", JSON.stringify(updatedMovieList));
      return { ...state, moviesList: updatedMovieList };
    }
    case "ADD_TO_WATCH": {
      const updatedWatchList = [
        ...state.watchList,
        ...state.moviesList.filter((currentMovie) => {
          return currentMovie.id == action.payload;
        }),
      ];

      localStorage.setItem("watch", JSON.stringify(updatedWatchList));
      return {
        ...state,
        watchList: updatedWatchList,
      };
    }
    case "REMOVE_FROM_WATCH": {
      const updatedWatchList = state.watchList.filter((currentMovie) => {
        return currentMovie.id !== action.payload;
      });

      localStorage.setItem("watch", JSON.stringify(updatedWatchList));
      return {
        ...state,
        watchList: updatedWatchList,
      };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);

  const simpleStr = (str) => {
    return str.trim().split(" ").join("").toLowerCase();
  };

  let filteredMovieList = state.moviesList;

  if (state.category) {
    filteredMovieList = filteredMovieList.filter((currentMovie) => {
      return currentMovie.genre.some((current) => {
        return current == state.category;
      });
    });
  }

  if (state.rating) {
    filteredMovieList = filteredMovieList.filter((currentMovie) => {
      return currentMovie.rating == state.rating;
    });
  }

  if (state.year) {
    filteredMovieList = filteredMovieList.filter((currentMovie) => {
      return currentMovie.year == state.year;
    });
  }

  if (state.searchText) {
    filteredMovieList = filteredMovieList.filter((currentMovie) => {
      return (
        simpleStr(currentMovie.title).includes(state.searchText) ||
        simpleStr(currentMovie.cast.join("")).includes(state.searchText) ||
        simpleStr(currentMovie.director).includes(state.searchText)
      );
    });
  }

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    const storedWatch = localStorage.getItem("watch");
    if (storedMovies) {
      dispatch({ type: "SET_MOVIES", payload: JSON.parse(storedMovies) });
      dispatch({ type: "SET_WATCH", payload: JSON.parse(storedWatch) });
    } else {
      localStorage.setItem("movies", JSON.stringify(movies));
      localStorage.setItem("watch", JSON.stringify(state.watchList));
      dispatch({ type: "SET_MOVIES", payload: movies });
      dispatch({ type: "SET_WATCH", payload: state.watchList });
    }
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch, filteredMovieList }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
