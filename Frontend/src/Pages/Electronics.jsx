import { Box, Image,Text,Flex, Grid, Select } from '@chakra-ui/react';
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
  }, [products.length])
  
  const sortbyPrice = (e) => { 
    let sortValue = e.target.value;
    console.log(sortValue);
    let temp = [...electronicsData];
    if (sortValue === "lth") {
      temp.sort((a,b)=>a.price-b.price);
    } else { 
      temp.sort((a,b)=>b.price-a.price)
    }
    setElectronicsData(temp);
  }
  
  return (
    <Box>
      <Flex zIndex={"20"} pt="50px" justifyContent="center" alignItems="center">
          <Box pt="7px" position={"fixed"} zIndex={"10"}>
            <Select fontSize={"22px"} onChange={sortbyPrice}>
              <option>Select by price</option>
              <option value="lth">low to high</option>
              <option value="htl">high to low</option>
            </Select>
      </Box>
          </Flex>
    <Grid gridGap={"30px"} templateColumns={"repeat(5,1fr)"} position={"relative"} top={"100px"}>
    {
      loading ? <Text w={"200px"} mx="auto" color="red">Data is loading </Text> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
        electronicsData?.map((element) => {
          return (
            <ProductSimple element={element} key={ element.id} />
          )
        })
    }
      </Grid>
      </Box>
  )
  
}

export default Electronics