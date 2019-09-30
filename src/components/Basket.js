import React, { useContext } from "react";
import { AppContext } from "../Basket-Context";
import styled from "styled-components";

const Basket = () => {
  const [basket, setBasket] = useContext(AppContext);
  const addToBasket = () => {
    const item = { product: basket[0].product, price: basket[0].price };
    setBasket(currentBasket => [...currentBasket, item]);
  };
  const removeFromBasket = () => {
    // const item = { product: basket[0].product, price: basket[0].price };
    setBasket(currentBasket => currentBasket.slice(0, -1));
  };
  const Title = styled.p`
    font-size: 2.5em;
    text-align: center;
    color: palevioletred;
  `;
  const ProductTitle = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Error = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 10px;
    background: papayawhip;
    color: palevioletred;
  `;
  const Text = styled.div`
    font-size: 1em;
    text-align: center;
    color: palevioletred;
  `;
  if (basket.length === 0) return <Error>No Items found in Basket</Error>;
  return (
    <div>
      <Title>Basket</Title>
      <ProductTitle>{basket[0].product}</ProductTitle>
      <Text>
        <p>Quantity: {basket.length}</p>
        <Button onClick={addToBasket}> + </Button>
        <Button onClick={removeFromBasket}>-</Button>
        <p>Total:£{basket.length * basket[0].price}</p>
        <Button onClick={() => setBasket([])}>Delete</Button>
        <Button>Buy</Button>
      </Text>
    </div>
  );
};

export default Basket;
