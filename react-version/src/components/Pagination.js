import React, { use, useEffect, useState } from "react";
const API_URL = "https://dummyjson.com/products?limit=500";
export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [tabCounts, setTabCouns] = useState(1);
  const [viewProduct, setViewProducts] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const productPerTab = 10;
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    const start = (currentTab - 1) * productPerTab;
    const end = currentTab * productPerTab;
    const prods = products.slice(start, end);
    setViewProducts(prods);
  }, [currentTab, products]);
  useEffect(() => {
    if (!products.length) return;
    setTabCouns(Math.ceil(products.length / productPerTab));
  }, [products]);

  const getProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setProducts(data?.products);
  };
  const handleShowTab = (index) => {
    setCurrentTab(index + 1);
  };

  return (
    <div>
      {viewProduct.map((product) => {
        return <div key={product?.id}>{product?.title}</div>;
      })}
      <div style={{ display: "flex" }}>
        {Array.from({ length: tabCounts }, (_, i) => {
          return (
            <div
              onClick={() => handleShowTab(i)}
              style={{
                margin: "5px",
                padding: "5px",
                textAlign: "center",
                border: "2px solid grey",
                cursor: "pointer",
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
