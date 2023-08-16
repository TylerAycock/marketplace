const Dropdown = ({ products }) => {
  let theCat = products.map((item) => {
    return item.category;
  });

  let onlyCat = [...new Set(theCat)];

  let options = onlyCat?.map((category, index) => {
    let shown = category[0].toUpperCase() + category.slice(1);
    return (
      <option key={index} value={category}>
        {shown}
      </option>
    );
  });

  return <>{options}</>;
};

export default Dropdown;
