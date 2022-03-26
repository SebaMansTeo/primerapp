import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div align="left">
      <table>
        <tbody>
          <tr>
            <td align="left">
              <button className="btn btn-secondary" onClick={() => decrement()}>
                -
              </button>
            </td>
            <td align="center" style={{ fontSize: "20px" }}>
              {quantity}
            </td>
            <td align="right">
              <button className="btn btn-secondary" onClick={() => increment()}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td align="center" colSpan="5">
              <button
                className="itemBtn btn-outline-secondary"
                onClick={() => onAdd(quantity)}
              >
                AGREGAR AL CARRITO
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ItemCount;
