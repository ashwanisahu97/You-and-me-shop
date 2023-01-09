import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from '../Components/ProductSimple';
import { Box, Flex, Grid ,Input,Text} from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai"
const Homepage = () => {
  const dispatch = useDispatch();
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => { 
    if (products?.length == 0) { 
      console.log("fetching data")
      dispatch(fetchData())
     }
  }, [dispatch,products?.length])
  console.log("products",products)
  return (
    <Box>
      <Flex h={"50px"} zIndex={"20"}  justifyContent="center" alignItems="center">
 <Flex w="350px">
      <Box  pt="7px" position={"fixed"} w="50px"  zIndex={"10"}><AiOutlineSearch w="50px" size={ "30px"} /></Box>
          <Input  pl="35px" position={"fixed"}  zIndex={"10"} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} color="#696e79" fontSize={"20px"} fontheight="24px" fontWeight="400" type={"text"} placeholder={`What are you looking for`} w={"300px"}></Input>
          </Flex>
          </Flex>
    <Box position={"absolute"} top={"100px"} >
        {
          loading ? <Text w={"200px"} mx="auto" color="red">Data is loading </Text> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
            <Grid gridGap={"30px"} templateColumns={"repeat(5,1fr)"} >
              {
                products.map((item, i) => (
                  <ProductSimple element={item} key={i} />
                ))
              }
            </Grid>
      }
      </Box>
      </Box>
  )
}

export default Homepage