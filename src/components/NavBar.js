import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
    justify-content: space-evenly;
  `;
  return (
    <nav>
      <div>
        <StyledLink to="/">Product</StyledLink>
      </div>
      <div>
        <StyledLink to="/basket/">Basket</StyledLink>
      </div>
    </nav>
  );
};

export default NavBar;
