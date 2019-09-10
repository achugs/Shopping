import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Product</Link>
        <Link to="/basket/">Basket</Link>
      </div>
    </nav>
  );
};

export default NavBar;
