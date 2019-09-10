import React from "react";
import styled from "styled-components";

const PageNotFound = () => {
  const Text = styled.div`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
  `;
  return (
    <Text>
      <h1>Page Not Found</h1>
    </Text>
  );
};

export default PageNotFound;
