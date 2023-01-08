import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import { useNavigate } from 'react-router-dom';
import ProductSimple from '../Components/ProductSimple';

const Men = () => {
  const dispatch = useDispatch();
  const [mensData,setMensData]=useState([])
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    dispatch(fetchData())
  }, [])

  useEffect(() => { 
    const mensWear = products?.filter((element) => { 
      return element.category == "mens";
    })
    console.log("mensWear",mensWear)
    setMensData(mensWear)
  },[products.length])
  
  return (
    <ProductSimple data={mensData} loading={loading} error={error} />
  )
}

export default Men