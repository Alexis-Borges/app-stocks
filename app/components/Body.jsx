"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";

const Body = () => {
  const [products, setProducts] = useState([
    { name: "Pizza", amount: 3 },
    { name: "Pâtes", amount: 3 },
  ]);

  /*useEffect(() => {
    getAllProducts(setProducts);
  }, []);*/

  return (
    <div className="bg-white  mb-24">
      <h3>All products</h3>
      <div className="p-12">
        {products.map((element, index) => (
          <section className="bg-red-200" key={index}>
            <p className="p-12">{element.name}</p>
            <p>{element.amout}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Body;
