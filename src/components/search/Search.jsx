import "./Search.css";
import { useState, useEffect } from "react";
import ProductCard from "../cards/ProductCard";
import Dropdown from "./DropDown";

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
      <div className="search-bar">
        <input
          type="text"
          placeholder="search for an item"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <label htmlFor="category">Categories:</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <Dropdown products={products}/>
          {/* <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option> */}
        </select>
        {category.length > 0 ? (
          <input
            type="text"
            placeholder="filter more"
            onChange={(e) => setFilterSearch(e.target.value)}
          />
        ) : (
          ""
        )}
      </div>
      {category.length > 0 ? (
        <div className="prod-container">{dropDownDisplay}</div>
      ) : (
        <div className="prod-container">{searchDisplay}</div>
      )}
    </div>
  );
};

export default Search;
