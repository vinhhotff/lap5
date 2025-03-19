"use client";
import React, { useEffect, useState } from "react";
import "./UseEffect.scss";
import { Button } from "@mui/material";

const UseEffect = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, SetPage] = useState(0);
  const [pageQuality, setPagequality] = useState(0);
  const limit = 9;
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setPagequality(Math.ceil(data.total / limit));
      });
  }, [page]);
    const handlePage =(e:number)=>{
      SetPage(e);
    }
  return (
    <>
      <div className="product_list">
        {data.map((item) => (
          <div className="product_item" key={item.id}>
            <div className="product_image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product_title">{item.title}</div>
            <div className="product_price">{item.price}$</div>
          </div>
        ))}
      </div>
      <div>
      {[...Array(pageQuality)].map((_, index) => (
          <Button key={index} variant="contained" onClick={() => handlePage(index)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </>
  );
};

export default UseEffect;
