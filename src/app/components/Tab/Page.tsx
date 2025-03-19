"use client";
import Button from '@mui/material/Button/Button'
import React, { useEffect, useState } from 'react'
import './index.scss'; 
const Page = () => {
  const [data,setData]=useState<any[]>([]);
  const [Active,setActive]=useState('products')
  useEffect(()=>{
      fetch(`https://dummyjson.com/${Active}`)
      .then (res=>res.json())
      .then ((data)=>{
        setData(data[Active]);
      })
  },[Active])
  const handleActivite =(e:string)=>{
      setActive(e);
  }
  return (
   <>
    <div className='Tab'>
      <div className='Tab_item'>
      <Button onClick={()=>handleActivite("products")}>Products</Button>
      <Button onClick={()=>handleActivite("users")}>Users</Button>
      <Button onClick={()=>handleActivite("posts")}>Posts</Button>
      </div>

    </div>
    <div>
      {
        data.map((item,index)=>(
          <div key={index}> {item.title || item.firstName}</div>
        ))
      }
    </div>
   </>
     
  )
}

export default Page
