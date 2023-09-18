import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";
import { Metronome } from "@uiball/loaders";
import { useContext } from "react";
import langData from "../languageData";
import { LanguageContext } from "../App";

const Search = () => {
  const { language } = useContext(LanguageContext);
  const [lang, setLang] = useState(langData[language].search);

  useEffect(() => {
    setLang(langData[language].search);
  }, [language]);
  const navigate = useNavigate();
  const products = useSelector((state) => state.fetchReducer.products);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
  function search(e) {
    e.preventDefault();
    if (text) {
      const word = text.trim();
      const value = word[0].toUpperCase() + word.slice(1);
      const sort = getKeyByValue(products, value);
      navigate(`/Special Products/${sort}/${value}`);
    }
    setData([]);
  }
  useEffect(() => {
    setTimeout(() => {
      const word = text.trim();
      const value = word.length > 1 && word[0].toUpperCase() + word.slice(1);
      const sort = getKeyByValue(products, value);
      setData(
        text && products.filter((item) => item[sort] == value).slice(0, 5)
      );
      setLoading(false);
    }, 1000);
  }, [text]);
  return (
    <div className="search">
      <form onSubmit={search} action="/">
        <input
          placeholder={data.header}
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setLoading(true);
          }}
        />
        <button>
          <img
            onClick={() => {}}
            src="/images/light/icons/search-icon.png"
            alt="search"
          />
        </button>
      </form>
      <div className="search-result">
        {loading ? (
          <div className="search-loading">
            <span>{lang}</span>
            <Metronome size={40} speed={1.6} color="black" />
          </div>
        ) : (
          data &&
          data.map((product) => (
            <SearchItem
              product={product}
              key={product.id}
              onSetData={setData}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
