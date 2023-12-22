import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const ProductForm = ({ getData, products }) => {
  
  const [newItem, setNewItem] = useState({});

  const AddProduct = async (newItem) => {
    try {
      await axios.post("https://658056a36ae0629a3f54f229.mockapi.io/products", newItem)
      setNewItem({
        title: "",
        price: "",
        quantity: "",
        image: "",
      });
    } catch (error) {
      alert("An error occurred: " + error.message)
    }
    getData()
  }

  const handleData = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewItem({
      title: "",
      price: "",
      quantity: "",
      image: "",
    })
    await AddProduct(newItem)
    Swal.fire({
      title: newItem.title,
      text: "Ürün Başarıyla Eklendi.",
      imageUrl: newItem.image,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image"
    });

  }


  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">Product</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="add-name" required onChange={handleData}
            value={newItem.title}
            name="title"

          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="add-price"
            required
            onChange={handleData}
            value={newItem.price}
            name="price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="add-quantity"
            required
            onChange={handleData}
            value={newItem.quantity}
            name="quantity"
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
            onChange={handleData}
            name="image"
            value={newItem.image}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
