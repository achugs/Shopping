import React, { useContext } from "react";
import { database, images } from "./database";
import { AppContext } from "../Basket-Context";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const Product = () => {
  const [basket, setBasket] = useContext(AppContext);
  const [index, setIndex] = React.useState(0);
  const addToBasket = () => {
    const item = { product: database[0].product, price: database[0].price };
    setBasket(currentBasket => [...currentBasket, item]);
  };
  return (
    <div>
      <p>{database[0].product}</p>
      <div style={{ width: "50vw", height: "50vh" }}>
        <Gallery
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(img => (
            <GalleryImage objectFit="contain" key={img.src} src={img.src} />
          ))}
        </Gallery>
      </div>
      <p>£{database[0].price}</p>
      <p>{database[0].description}</p>
      <p>Quantity in Basket: {basket.length}</p>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
