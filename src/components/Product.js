import React, { useContext } from "react";
import { database, images } from "./database";
import { AppContext } from "../Basket-Context";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import styled from "styled-components";

const Product = () => {
  const [basket, setBasket] = useContext(AppContext);
  const [index, setIndex] = React.useState(0);
  const addToBasket = () => {
    const item = { product: database[0].product, price: database[0].price };
    setBasket(currentBasket => [...currentBasket, item]);
  };

  const Title = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Text = styled.div`
    font-size: 1em;
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
  return (
    <div>
      <Title>
        <p>{database[0].product}</p>
      </Title>
      <div
        style={{
          width: "60vw",
          height: "60vh"
        }}
      >
        <Gallery
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(img => (
            <GalleryImage key={img.src} src={img.src} />
          ))}
        </Gallery>
      </div>
      <Text>
        <p>Price: £{database[0].price}</p>
        <p>{database[0].description}</p>
        <p>Quantity in Basket: {basket.length}</p>

        <Button onClick={addToBasket}>Add to Basket</Button>
      </Text>
    </div>
  );
};

export default Product;
