import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const NewProduct = () => {
  const [products, setProducts] = useState([])

  const getData = async () => {
    try {
      const res = await axios("https://658056a36ae0629a3f54f229.mockapi.io/products/")
      setProducts(res.data)
    } catch (error) {
      console.error("Something went wrong", error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return <div className="container">
    <ProductForm products={products} getData={getData} />
  </div>;
};

export default NewProduct;
