import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.fetchReducer.products);
  const [text, setText] = useState("");
  function getKeyByValue(array, value) {
    for (let i = 0; i < array.length; i++) {
      for (let prop in array[i]) {
        if (array[i].hasOwnProperty(prop)) {
          if (array[i][prop] === value) {
            return prop;
          }
        }
      }
    }
  }
  return (
    <div className="search">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const value = text[0].toUpperCase() + text.slice(1);
          const sort = getKeyByValue(products, value);
          navigate(`/Special Products/${sort}/${value}`);
          console.log(sort);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
