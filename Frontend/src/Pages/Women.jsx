import { Box, Image,Text,Flex, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [womensData,setwomensData]=useState([])
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    dispatch(fetchData())
  }, [])

  useEffect(() => { 
    const womensWear = products?.filter((element) => { 
      return element.category == "womens";
    })
    console.log("womensWear",womensWear)
    setwomensData(womensWear)
  },[products.length])
 
  return (
    <ProductSimple data={womensData} loading={loading} error={error} />
  )
  
}

export default Men