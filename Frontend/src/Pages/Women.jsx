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
    <Grid gridGap={"30px"} templateColumns={"repeat(4,1fr)"} position={"relative"} top={ "100px"}>
      {
        loading ? <Text textAlign={"center"} color="red" m={ "auto"}>Data is loading</Text> : error ? <Text color="red" m={ "auto"}>Something went wrong,please try again</Text> :
          womensData?.map((element) => { 
            return (
              <Box onClick={() => {
                navigate(`/productDetails/${element.id}`)
              }} key={element.id} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} mb={"15px"} borderRadius={"10px"}>
                <Box h={ "340px"}><Image w={"90%"} mx="5%" h={ "100%"} src={element.image}></Image></Box>
                <Box fontSize={"lg"} p={"10px"} h={"150px"}>
                  <Text textAlign={"center"} boxSizing='border-box' px="5px" borderRadius={'5px'} w="80px" bg={"yellow"} color={"grey.500"}>BRAND</Text>
                  <Text h="65px" overflow={'hidden'} fontWeight={"bold"} fontSize="xl">{element.title}</Text>
                  <Flex gap={10}>
                    <Flex gap="3px" justifyContent={"center"} alignItems="center">
                    <Text fontSize={"lg"} fontWeight={'bold'} color="green.800">Price:</Text>
                      <Text fontSize={'md'} fontWeight={'bold'} color={'red.600'}>${element.price}</Text>
                    </Flex>
                    <Flex gap="3px" justifyContent={"center"} alignItems="center">
                    <Text fontWeight={"bold"} fontSize={"lg"}>MRP:</Text>
                      <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
                      </Text>
                      </Flex>
                  </Flex>
                </Box>
               {/* <Box>
                  <Button onClick={() => { navigate(`/productDetails/${element.id}`)}} _hover={{backgroundColor:"blue",color:"white"}} w={ "100%"} bg={ "red"}>See more details</Button>
             </Box> */}
              </Box>
            )
          })
      }
    </Grid>
  )
  
}

export default Men