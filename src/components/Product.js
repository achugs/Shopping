import React, { useContext } from "react";
import { database } from "./database";
import { AppContext } from "../Basket-Context";

const Product = () => {
  const [basket, setBasket] = useContext(AppContext);
  return (
    <div>
      <p>{database[0].product}</p>
      <p>£{database[0].price}</p>
      <p>{database[0].description}</p>
      <p>Quantity in Basket: {basket.length}</p>
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
