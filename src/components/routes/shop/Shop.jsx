import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/Products";
import ProductCard from "../../product-card/ProductCard";
import "./Shop.scss";

function Shop() {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
