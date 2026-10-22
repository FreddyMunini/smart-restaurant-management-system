
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const addItem = (item) => {
    setCart([...cart, item]);
    setMessage("");
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      setMessage("Please add an item to your cart first.");
      return;
    }

    setMessage("Order placed successfully!");
    setCart([]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Choose Your Food</h3>

      <button onClick={() => addItem("Chicken Alfredo")}>
        Add Chicken Alfredo - $18.99
      </button>

      <button onClick={() => addItem("Margherita Pizza")}>
        Add Margherita Pizza - $14.99
      </button>

      <button onClick={() => addItem("Vegetable Pasta")}>
        Add Vegetable Pasta - $13.99
      </button>

      <button onClick={() => addItem("Chocolate Lava Cake")}>
        Add Chocolate Lava Cake - $6.99
      </button>

      <button onClick={() => addItem("Orange Juice")}>
        Add Orange Juice - $3.99
      </button>

      <h3>Items in Cart ({cart.length})</h3>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={placeOrder}>
        Place Order
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Cart;
