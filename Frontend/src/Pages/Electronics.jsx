import { Box, Image,Text,Flex, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import { useNavigate } from 'react-router-dom';
import ProductSimple from '../Components/ProductSimple';
const Electronics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [electronicsData,setElectronicsData]=useState([])
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    dispatch(fetchData())
  }, [])

  useEffect(() => { 
    const electronicsWear = products?.filter((element) => { 
      return element.category == "electronics";
    })
    console.log("electronicsWear",electronicsWear)
    setElectronicsData(electronicsWear)
  },[products.length])
  
  return (
    <ProductSimple data={electronicsData} loading={loading} error={error} />
  )
  
}

export default Electronics