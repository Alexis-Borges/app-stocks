"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Body = () => {
  const [products, setProducts] = useState([
    { name: "Pizza", amount: 3 },
    { name: "Pâtes", amount: 3 },
  ]);

  /*useEffect(() => {
    getAllProducts(setProducts);
  }, []);*/

  return (
    <div className="mb-24">
      <h3>All products</h3>
      <div className="p-12 flex flex-wrap bg-[#191D24] rounded-xl">
        {products.map((element, index) => (
          <div
            className="flex-col items-center p-2 bg-red-200 rounded-xl shadow-sm justify-between h-[300px] fit-content"
            key={index}
          >
            <p className="text-center">{element.name}</p>
            <p>Quantité : {element.amout}</p>
            <div className="flex items-center">
              <AiFillMinusCircle className="text-xl" />
              <input
                type="number"
                className="rounded-xl focus:outline-none p-2 w-20 text-center mx-2"
              ></input>
              <AiFillPlusCircle className="text-xl" />
            </div>
            <button
              type="button"
              className="text-[#8EBCFE] rounded-xl p-2 hover:bg-black"
            >
              Modify amount
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
