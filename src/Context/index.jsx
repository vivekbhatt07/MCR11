import { createContext, useContext, useReducer } from "react";
import { movies } from "../Data";

const DataContext = createContext();

const InitialState = {
  moviesList: movies,
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL": {
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
