import React from "react";

const FilterDropDown = ({ type, values }) => {
  // type is a string
  // values is an array of strings

  return (
    <div className="bg-fuchsia-900 gap-4">
      <label for={type}>Choose a {type}: </label>
      <select
        className="text-gray-950  mx-1 my-2 p-2"
        id={type}
        name={type}
        // onChange={handleOnChange}
      >
        <option value="">All {type}</option>
        {values.map((val) => {
          console.log("val", val);
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterDropDown;
