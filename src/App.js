import React, { useState } from "react";
import ShowProducts from "./Components/ShowProducts/ShowProducts";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import "./App.css";

const simpleProducts = [
  {
    id: "p1",
    title: "ကြက်သွန်နီ တစ်ပိဿာ",
    price: 2000,
  },
  {
    id: "p2",
    title: "ကြက်သွန်ဖြူ တစ်ပိဿာ",
    price: 3500,
  },
  {
    id: "p3",
    title: "ငြုတ်သီခွဲခြမ်း တစ်ပိဿာ",
    price: 6000,
  },
  {
    id: "p4",
    title: "ပဲဆီ တစ်ပိဿာ",
    price: 9000,
  },
  {
    id: "p5",
    title: "ဆန် တစ်ပိဿာ",
    price: 3500,
  },
  {
    id: "p6",
    title: "အာလူး တစ်ပိဿာ",
    price: 1200,
  },
  {
    id: "p7",
    title: "ခရမ်းချဉ်သီး တစ်ပိဿာ",
    price: 1500,
  },
  {
    id: "p8",
    title: "ကန်စွန်းဥ တစ်ပိဿာ",
    price: 1800,
  },
];

const App = () => {
  const [allProducts, setAllProducts] = useState(simpleProducts);
  const productHandler = (getNewProduct) => {
    setAllProducts((preventProducts) => {
      return [getNewProduct, ...preventProducts];
    });
  };
  console.log(allProducts);
  return (
    <div>
      <div className="row">
        <div className="col-1 border-right p-0">
          <h1>First Part</h1>
        </div>
        <div className="col-2 border-right product_background_color">
          <ShowProducts products={allProducts} />
        </div>
        <CreateProduct products={allProducts} productHandler={productHandler} />
      </div>
    </div>
  );
};

export default App;
