import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Product from "../Product/Product";
import "./Products.scss";

const Products = () => {
  const { productsContext } = useContext(AppContext);
  const [products, setProducts] = productsContext;

  const getData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const data = await res.json();
    setProducts(data);

    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //     setSource(data);
    //   });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="products" id="shop">
      <div className="products-grid">
        {products.map((item, index) => (
          <Product
            key={index}
            id={item.id}
            firstImg={item.image}
            title={item.title}
            creationAt={item.creationAt}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
