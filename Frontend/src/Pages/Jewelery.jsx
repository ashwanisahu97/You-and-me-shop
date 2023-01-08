import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';

const Jewelery = () => {
  const dispatch = useDispatch();
  const [jeweleryData,setjeweleryData]=useState([])
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    dispatch(fetchData())
  }, [])

  useEffect(() => { 
    const jeweleryWear = products?.filter((element) => { 
      return element.category == "jewelery";
    })
    console.log("jeweleryWear",jeweleryWear)
    setjeweleryData(jeweleryWear)
  },[products.length])
  
  return (
    <ProductSimple data={jeweleryData} loading={loading} error={error} />
  )
  
}

export default Jewelery