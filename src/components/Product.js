import React, { useContext } from "react";
import { database } from "./database";
import { AppContext } from "../Basket-Context";

const Product = () => {
  const [basket, setBasket] = useContext(AppContext);
  const addToBasket = () => {
    const item = { product: database[0].product, price: database[0].price };
    setBasket(currentBasket => [...currentBasket, item]);
  };
  return (
    <div>
      <p>{database[0].product}</p>
      <p>£{database[0].price}</p>
      <p>{database[0].description}</p>
      <p>Quantity in Basket: {basket.length}</p>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
