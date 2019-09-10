import React from "react";
import { database } from "./database";

const Product = () => {
  return (
    <div>
      <p>{database[0].product}</p>
    </div>
  );
};

export default Product;
