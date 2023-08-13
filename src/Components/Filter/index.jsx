import { useState } from "react";
import { useData } from "../../Context";

const Filter = () => {
  const { state, dispatch } = useData();

  return (
    <div className="flex gap-8">
      <select
        defaultValue=""
        value={state.category}
        className="border px-2 py-1 rounded-md border-[#aaa]"
        onChange={(e) => {
          dispatch({ type: "SET_CATEGORY", payload: e.target.value });
        }}
      >
        <option value="">All Genre</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Action">Action</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Biography">Biography</option>
      </select>
      <select
        defaultValue=""
        value={state.year}
        className="border px-2 py-1 rounded-md border-[#aaa]"
        onChange={(e) => {
          dispatch({ type: "SET_YEAR", payload: e.target.value });
        }}
      >
        <option value="">Release Year</option>
        <option value="1991">1991</option>
        <option value="1992">1922</option>
        <option value="1994">1994</option>
        <option value="1999">1999</option>
        <option value="2001">2001</option>
        <option value="2003">2003</option>
        <option value="2008">2008</option>
        <option value="2010">2010</option>
      </select>

      <select
        defaultValue=""
        value={state.rating}
        className="border px-2 py-1 rounded-md border-[#aaa]"
        onChange={(e) => {
          dispatch({ type: "SET_RATING", payload: e.target.value });
        }}
      >
        <option value="">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default Filter;
