import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from "react-router-dom"
import { fetchData } from '../Redux/App/action';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
  const products = useSelector((store) => store.data)
  useEffect(() => { 
    if (products?.length === 0) { 

      dispatch(fetchData())
    }
  },[dispatch,products?.length])
    useEffect(() => { 
        const singleProd = products.find((e) => e.id == id)
        setSingleProduct(singleProd)
    }, [id,products?.length])
    console.log("single product", singleProduct);
  return (
    <HStack border={"1px solid red"} w={ "60%"}  m={"auto"} position={"relative"} top={ "100px"}>
      <Box w={ "600px"}>
        <Image w={"100%"} src={ singleProduct?.image}></Image>
 </Box>
      <Box>
        <VStack border={"1px solid green"} w={ "500px"}>
          <Box>
            <Text>{singleProduct?.title}</Text>
          </Box>
          <Box>
            <Text>{singleProduct?.description}</Text>
          </Box>
          <Box>
            <Text>{singleProduct?.price}</Text>
          </Box>
          <Box w={"100%"} border={"1px solid red"}>
            <Button w={"100%"}>Add to cart</Button>
          </Box>
        </VStack>
 </Box>
   </HStack>
  )
}

export default ProductDetails