import { Box, Image,Text,Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
const Electronics = () => {
  const dispatch = useDispatch();
  const [electronicsData,setelectronicsData]=useState([])
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
    setelectronicsData(electronicsWear)
  },[products.length])
  
  return (
    <Flex w={ "100%"} gap={ "5%"} position={"relative"} top={ "100px"}  flexWrap={"wrap"}>
      {
        loading ? <Text color="red" m={ "auto"}>Data is loading</Text> : error ?<Text color="red" m={ "auto"}>Something went wrong,please try again</Text> :
          electronicsData?.map((element) => { 
            return (
              <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} key={element.id} w={"20%"} mb={"15px"} borderRadius={ "10px"}>
                <Box h={ "250px"}><Image w={"100%"} h={ "100%"} src={element.image}></Image></Box>
                <Box>
                <Text>{element.title }</Text>
                <Text>{element.price }</Text>
                </Box>
              </Box>
            )
          })
      }
   </Flex>
  )
  
}

export default Electronics