import React from "react";
import { NavLink } from "react-router-dom";
import TextInput from "../TextInput";
import { useData } from "../../Context";

const Header = () => {
  const { state, dispatch } = useData();
  return (
    <header className="px-3 py-3 flex justify-between items-center border-b border-[#ddd] w-full bg-stone-800 text-stone-300">
      <div className="flex gap-2 justify-between w-full items-center">
        <h1 className="text-2xl">IMDB</h1>
        <TextInput
          inputValue={state.searchText}
          inputHandle={(e) => {
            dispatch({ type: "SET_SEARCH", payload: e.target.value });
          }}
          inputType="text"
          TextInputStyles={{ width: "300px" }}
          inputPlaceholder="Seach Movies by title, cast and director..."
        />
        <div className="flex gap-4">
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/watchList">Watch List</NavLink>
          <NavLink>Starred Movies</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
