import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = props => {
  const [basket, setBasket] = useState([]);
  return (
    <AppContext.Provider value={[basket, setBasket]}>
      {props.children}
    </AppContext.Provider>
  );
};
