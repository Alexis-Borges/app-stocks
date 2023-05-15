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

  function modifyAmount(operation, number) {
    const modifyAmountButton = document.getElementById("modifyAmountInput");
    //change value of product
    console.log(modifyAmountButton.value);
  }

  return (
    <div className="mb-24">
      <h1 className="font-bold mb-12 text-center">All products</h1>
      <div className="flex flex-rowflex-wrap p-12 bg-[#191D24] rounded-xl w-[92%] m-auto">
        {products.map((element, index) => (
          <div
            className="flex flex-col items-center p-2 rounded-xl shadow-lg shadow-black justify-around h-[300px] w-[300px] m-4"
            key={index}
          >
            <p className="font-bold text-xl">{element.name}</p>
            <p>Quantité : {element.amout}</p>
            <div className="flex flex-row items-center">
              <AiFillMinusCircle
                className="text-xl"
                onClick={() => {
                  modifyAmount("minus", index);
                }}
              />
              <input
                type="number"
                className="rounded-xl focus:outline-none p-2 w-20 text-center mx-2"
                id="modifyAmountInput"
              ></input>
              <AiFillPlusCircle
                className="text-xl"
                onClick={() => {
                  modifyAmount("plus", index);
                }}
              />
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
