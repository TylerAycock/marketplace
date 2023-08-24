import "./Search.css";
import { useState, useEffect } from "react";
import ProductCard from "../cards/ProductCard";
import Dropdown from "./DropDown";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ products }) => {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");

  //updates filtered list every time category changes
  useEffect(() => {
    let cat = products.filter((item) => {
      return item.category === category;
    });
    setFiltered([...cat]);
  }, [category]);

  //filters products arr to only show items that meet search query
  let searchDisplay = products
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchInput.toLowerCase())) {
        return item;
      }
    })
    .map((item, index) => {
      return <ProductCard key={index} item={item} />;
    });

  //additional filter option to support the dropdown filter
  let dropDownDisplay = filtered
    .filter((item) => {
      if (item.title.toLowerCase().includes(filterSearch.toLowerCase())) {
        return item;
      }
    })
    .map((item, index) => {
      return <ProductCard key={index} item={item} />;
    });

  return (
    <div className="search">
      <div className="search-bar-container">
        <div className="search-bar">
        <AiOutlineSearch className="search-icon"/>
          <input className="search-input" type="text" placeholder="TYPE TO SEARCH" onChange={(e) => {setSearchInput(e.target.value);}}/>
        </div>
          <div className="category-bar">
          <label htmlFor="category">Filter By Category:</label>
            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <Dropdown products={products} />
            </select>
            {category ? (
              <input
                type="text"
                placeholder="TYPE TO SEARCH"
                onChange={(e) => setFilterSearch(e.target.value)}
              />
            ) : (
              <span></span>
            )}
          </div>
      </div>
        {category? (
          <div className="results">{dropDownDisplay}</div>
        ) : (
          <div className="results">{searchDisplay}</div>
        )}
      </div>
  );
};

export default Search;
