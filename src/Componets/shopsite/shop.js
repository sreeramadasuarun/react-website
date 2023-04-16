import React, { useState } from "react";
import shopdata from "./shopdata";
import "../../Componets/shopsite/shopstyles.css";

const Shop = () => {
  const [products, setProducts] = useState(shopdata);
  const [filternames, setfilternames] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  console.log(products);

  const handleSearch = (e) => {
    e.preventDefault();

    const filterednames = shopdata.filter((products) =>
      products.title
        .toLowerCase()
        .trim()
        .includes(filternames.toLowerCase().trim())
    );
    setProducts(filterednames);
    console.log(filternames);
  };

  const handleSort = (e) => {
    e.preventDefault();

    const sortedProducts = shopdata.sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  return (
    <div className="allcard">
      <div className="shop-background"> </div>
      <form>
        <label> name: </label>
        <input
          type="text"
          name="search"
          id="search"
          value={filternames}
          onChange={(e) => setfilternames(e.target.value)}
          placeholder="search name"
        />
        <button
          className="button-filters "
          onClick={handleSearch}
          type="submit"
        >
          click
        </button>
        <br />
        <button className="button-filters " onClick={handleSort}>
          Sort by Price(
          {sortDirection === "asc" ? "Low to High" : "High to Low"})
        </button>
      </form>
      <h1> shopping </h1>
      <div className="cardcon">
        {products.map(({ title, price, category, id, image }) => {
          return (
            <div key={id}>
              <article className="card">
                <div className="image">
                  <img src={image} alt="noimage" />
                </div>
                <h3> {title.split(" ").slice(0, 2).join(" ")} </h3>
                <div className="right-left">
                  <div className="left">
                    <span> price: </span>
                    <span className="bold"> {price} </span>
                  </div>
                  <div className="left">
                    <span> category: </span>
                    <span className="bold"> {category} </span>
                  </div>
                </div>
                <div className="overlay">
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
