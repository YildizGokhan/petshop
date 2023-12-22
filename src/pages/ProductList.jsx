import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";


const ProductList = () => {
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


  return (
    <div className="container mt-3">
      <div className="bg-light d-sm-block d-md-flex">
        {products.length === 0 && <p className="text-center text-danger w-100">Loading....</p>}

        <>
          <article id="product-panel" className="col-md-5">
            {products.length > 0 ? (
              products.map((product) => (
                <>
                <ProductCard key={product.id} product={product} getData={getData} />
                </>
              ))
            ) : (
              <p className="text-center text-danger w-100">No products data...</p>
            )}
          </article>
          <article className="col-md-5 m-3">
            <CardTotal products={products} />
          </article>
        </>

        
      </div>
    </div>
  );
};

export default ProductList;
