import React from "react";

const taxRate = 0.18;
const shipping = 25;


const CardTotal = ({products}) => {
  const subTotal = products?.reduce((acc, product) => (
    acc + Number(product.price) * Number(product.quantity)
  ), 0).toFixed(2);
  
  const total = (Number(subTotal) + Number(subTotal) * taxRate + shipping).toFixed(2);
  const taxRateText = (taxRate*Number(subTotal)).toFixed(2)


  
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{taxRateText}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">{total}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
