import { Box, Image,Text,Flex, Button, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    if (products?.length == 0) { 
      console.log("fetching data")
      dispatch(fetchData())
     }
  }, [dispatch,products?.length])
  console.log("products",products)
  return (
    <Grid gridGap={"30px"} templateColumns={"repeat(4,1fr)"} position={"relative"} top={ "100px"}>
      {
        loading ? <Text textAlign={"center"} color="red" m={ "auto"}>Data is loading</Text> : error ? <Text color="red" m={ "auto"}>Something went wrong,please try again</Text> :
          products?.map((element) => { 
            return (
              <Box onClick={() => {
                navigate(`/productDetails/${element.id}`)
              }} key={element.id} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} mb={"15px"} borderRadius={"10px"}>
                <Box h={ "300px"}><Image w={"90%"} mx="5%" h={ "100%"} src={element.image}></Image></Box>
                <Box fontSize={ "lg"} p={ "10px"} h={"150px"}>
                  <Text fontSize="lg">{element.title}</Text>
                  <Flex gap={ 10}>
                    <Text color={'gray.600'}>${element.price}</Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
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

export default Homepage