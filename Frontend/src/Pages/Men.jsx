import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import { useNavigate } from 'react-router-dom';
import ProductSimple from '../Components/ProductSimple';
import { Grid, Text } from '@chakra-ui/react';

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
   <Box>
    <Flex zIndex={"20"} pt="30px" border={"2px solid green"} ml="600px" alignItems="center">
 <Flex>
          <Box pt="7px" position={"fixed"} zIndex={"10"}>
            <Select onChange={ (e)=>setSort(e.target.value)}>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
      </Box>
          <Input position={"fixed"} border={"1px solid red"} zIndex={"10"} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} fontSize={"xl"} pl={"30px"} type={"text"} placeholder={`What are you looking for`} w={"300px"}></Input>
          </Flex>
          </Flex>
    <Grid gridGap={"30px"} templateColumns={"repeat(4,1fr)"} position={"relative"} top={"100px"}>
    {
      loading ? <Text w={"200px"} mx="auto" color="red">Data is loading </Text> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
        mensData?.map((element) => {
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