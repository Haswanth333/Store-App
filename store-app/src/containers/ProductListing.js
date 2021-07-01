import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.dat);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <h1>Product Listing</h1>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
