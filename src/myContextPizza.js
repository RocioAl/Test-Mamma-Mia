import React, { createContext, useEffect, useState } from "react";

export const myContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const dataPizza = async () => {
      const response = await fetch('/pizzas.json');
      const data = await response.json();
      setPizza(data);
    };

    dataPizza();
  }, []);

  return (
    <myContext.Provider
      value={{
        pizza,
        setPizza,
        cart,
        setCart,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default PizzaProvider;
