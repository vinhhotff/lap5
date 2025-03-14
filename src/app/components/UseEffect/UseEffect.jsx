"use client";
import React, { useEffect, useState } from "react";
import "./UseEffect.scss";
const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products); // ✅ Giữ nguyên object API trả về
      });
  }, []);

  console.log(data.products); // ✅ Kiểm tra xem có dữ liệu không

  return (
    <>
      <div className="product_list">
        {data.map((item) => (
          <div className="product_item" key={item.id}>
            <div className="product_image">
            <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product_title">{item.title}</div>
            <div className="product_price">
                {item.price}$
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseEffect;
