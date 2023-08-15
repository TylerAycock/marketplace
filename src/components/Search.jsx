import "./Search.css";
import { useState, useEffect } from "react";
import ProductCard from "./cards/ProductCard";

const Search = ({ products }) => {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [filtered, setFiltered] = useState([]);

  //updates filtered list every time category changes
  useEffect(() => {
    let cat = products.filter((item) => {
      return item.category === category;
    });
    setFiltered([...cat]);
  }, [category]);

  //maps over dropdown filter to return specified items
  const itemDisplay = filtered.map((item, index) => {
    return (
      <>
        <ProductCard key={index} item={item} />
      </>
    );
  });

  //filters products arr to only show items that meet search query
  let productDisplay = products
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchInput.toLowerCase())) {
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
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      {category.length > 0 ? (
        <div className="prod-container">{itemDisplay}</div>
      ) : (
        <div className="prod-container">{productDisplay}</div>
      )}
    </div>
  );
};

export default Search;
