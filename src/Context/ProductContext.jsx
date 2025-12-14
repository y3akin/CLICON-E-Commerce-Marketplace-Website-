import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

let ProductProvider = createContext();

const ProductContext = ({ children }) => {
   let [product, setProduct] = useState([]);

   useEffect(() => {
      fetch("https://dummyjson.com/products/category/smartphones")
         .then((res) => res.json())
         .then((data) => setProduct(data.products));
   }, []);
   return (
      <ProductProvider.Provider value={product}>
         {children}
      </ProductProvider.Provider>
   );
};

export { ProductProvider };
export default ProductContext;
