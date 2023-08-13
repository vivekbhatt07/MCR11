import { createContext, useContext, useReducer } from "react";
import { movies } from "../Data";

const DataContext = createContext();

const InitialState = {
  moviesList: movies,
  category: "",
  year: "",
  rating: "",
  searchText: "",
};

const DataReducer = (state, action) => {
  switch (action.type) {
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
