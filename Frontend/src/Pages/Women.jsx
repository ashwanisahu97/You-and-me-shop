import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from '../Components/ProductSimple';
import { Grid, Text } from '@chakra-ui/react';
const Men = () => {
  const dispatch = useDispatch();
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
    <Grid gridGap={"30px"} templateColumns={"repeat(4,1fr)"} position={"relative"} top={"100px"}>
    {
      loading ? <Text w={"200px"} mx="auto" color="red">Data is loading </Text> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
        womensData?.map((element) => {
          return (
            <ProductSimple element={element} key={ element.id} />
          )
        })
    }
    </Grid>
  )
  
}

export default Men