const Dropdown = ({ products }) => {
  let theCategories = products.map((item) => {
    return item.category;
  });

  let categoryArr = [...new Set(theCategories)];

  let options = categoryArr?.map((category, index) => {
    let capitalized = category[0].toUpperCase() + category.slice(1);
    return (
      <option key={index} value={category}>
        {capitalized}
      </option>
    );
  });

  return <>{options}</>;
};

export default Dropdown;
