import axios from "axios";
import React from "react";

const ProductCard = ({ product, getData }) => {
  const { id, price, image, title, quantity } = product

  const deleteProduct = async () => {
    try {
      await axios.delete(`https://658056a36ae0629a3f54f229.mockapi.io/products/${id}`)
      getData();
    } catch (error) {
      alert("Something went wrong")
    }
  }

  const minusProduct = async () => {
    if (quantity > 1) {
      try {
        await axios.put(`https://658056a36ae0629a3f54f229.mockapi.io/products/${id}`, { ...product, quantity: quantity - Number(1) })
        getData();
      } catch (error) {
        alert("Something went wrong: " + error.message)
      }
    } else {
      deleteProduct();
      getData();
    }
  }

  const plusProduct = async () => {
    try {
      await axios.put(`https://658056a36ae0629a3f54f229.mockapi.io/products/${id}`, { ...product, quantity: quantity + Number(1) })
      getData();
    } catch (error) {
      alert("Something went wrong: " + error.message)
    }
  }


  return (

    <div className="card shadow-lg mb-2 product-card" key={id}>
      <div className="row g-1">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={title}
            height="200px"

          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <button className="card-title btn btn-link text-decoration-none">
              {title}
            </button>
            <div className="product-price ">
              <p className="text-warning h2 p-2">
                $<span className="damping-price p-2">{price}</span>
                <span className="h5 text-dark text-decoration-line-through">
                  {(Number(price) + Number(price * 0.25)).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button className="btn btn-secondary btn-sm" onClick={minusProduct}>
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {quantity}
                </p>
                <button className="btn btn-secondary btn-sm" onClick={plusProduct}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button onClick={() => deleteProduct(id)} className="btn btn-danger btn-sm w-100 remove-product">
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $ <span className="product-line-price">{(price * quantity)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
