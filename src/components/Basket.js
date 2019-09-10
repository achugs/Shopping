import React, { useContext } from "react";
import { AppContext } from "../Basket-Context";

const Basket = () => {
  const [basket, setBasket] = useContext(AppContext);
  const addToBasket = () => {
    const item = { product: basket[0].product, price: basket[0].price };
    setBasket(currentBasket => [...currentBasket, item]);
  };

  if (basket.length === 0) return <h1>No Items found</h1>;
  return (
    <div>
      <p>Basket</p>
      <p>{basket[0].product}</p>
      <p>Quantity: {basket.length}</p>
      <button onClick={addToBasket}>Add more</button>
      <p>Total:£{basket.length * basket[0].price}</p>
      <button onClick={() => setBasket([])}>Delete</button>
    </div>
  );
};

export default Basket;
