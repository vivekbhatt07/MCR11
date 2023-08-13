import { useState } from "react";
// import { useData } from "../../Context";

const Filter = () => {
  //   const [filterData, setFilterData] = useState({});
  // const { state, dispatch } = useData();

  return (
    <div className="flex gap-8">
      <select
        defaultValue=""
        // value={state.category}
        className="border px-2 py-1 rounded-md border-[#aaa]"
        // onChange={(e) => {
        //   dispatch({ type: "FILTER_BY_CATEGORY", payload: e.target.value });
        // }}
      >
        <option value="">All Departments</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <select
        className="border px-2 py-1 rounded-md border-[#aaa]"
        // onChange={(e) => {
        //   dispatch({ type: "FILTER_BY_SORT", payload: e.target.value });
        // }}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>

      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          // checked={state.isLow}
          // onChange={(e) => {
          //   dispatch({ type: "TOGGLE_LOW_FILTER", payload: e.target.checked });
          // }}
        />
        <span>Low Stock Items</span>
      </label>
    </div>
  );
};

export default Filter;
