import React from "react";
import { database } from "./database";

const Product = () => {
  return (
    <div>
      <p>{database[0].product}</p>
      <p>£{database[0].price}</p>
      <p>{database[0].description}</p>
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
