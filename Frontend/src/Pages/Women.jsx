import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from '../Components/ProductSimple';
import { Box, Flex, Grid, Select, Text } from '@chakra-ui/react';
const Men = () => {
  const dispatch = useDispatch();
  const [womensData,setWomensData]=useState([])
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
    setWomensData(womensWear)
  }, [products.length])
  
  const sortbyPrice = (e) => { 
    let sortValue = e.target.value;
    console.log(sortValue);
    let temp = [...womensData];
    if (sortValue === "lth") {
      temp.sort((a,b)=>a.price-b.price);
    } else { 
      temp.sort((a,b)=>b.price-a.price)
    }
    setWomensData(temp);
  }
 
  return (
    <Box>
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
        womensData?.map((element) => {
          return (
            <ProductSimple element={element} key={ element.id} />
          )
        })
    }
      </Grid>
      </Box>
  )
  
}

export default Men