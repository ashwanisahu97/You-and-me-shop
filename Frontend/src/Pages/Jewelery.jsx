import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from '../Components/ProductSimple';
import { Flex, Grid, Select, Text } from '@chakra-ui/react';
import { Box } from '@mui/material';

const Jewelery = () => {
  const dispatch = useDispatch();
  const [jeweleryData,setjeweleryData]=useState([])
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    if (products.length === 0) {
      dispatch(fetchData())
    }
  }, [])

  useEffect(() => { 
    const jeweleryWear = products?.filter((element) => { 
      return element.category == "jewelery";
    })
    console.log("jeweleryWear",jeweleryWear)
    setjeweleryData(jeweleryWear)
  }, [products.length])
  
  const sortbyPrice = (e) => { 
    let sortValue = e.target.value;
    console.log(sortValue);
    let temp = [...jeweleryData];
    if (sortValue === "lth") {
      temp.sort((a,b)=>a.price-b.price);
    } else { 
      temp.sort((a,b)=>b.price-a.price)
    }
    setjeweleryData(temp);
  }
  
  return (
    <Box w="100%">
       <Flex zIndex={"20"} pt="50px" justifyContent="center" alignItems="center">
          <Box pt="7px" position={"fixed"} zIndex={"10"}>
            <Select  fontSize={"16px"} onChange={sortbyPrice}>
              <option>Sort by price</option>
              <option value="lth">low to high</option>
              <option value="htl">high to low</option>
            </Select>
      </Box>
          </Flex>
    <Grid templateColumns={"repeat(4,1fr)"} position={"relative"} top={"100px"}>
    {
      loading ? <Text w={"200px"} mx="auto" color="red">Data is loading </Text> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
        jeweleryData?.map((element) => {
          return (
            <ProductSimple element={element} key={ element.id} />
          )
        })
    }
      </Grid>
      </Box>
  )
  
}

export default Jewelery