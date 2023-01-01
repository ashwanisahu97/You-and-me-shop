import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams} from "react-router-dom"
const ProductDetails = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    const products=useSelector((store)=>store.data)
    // useEffect(() => { 
    //     const singleProd = products.find((e) => e.id == id)
    //     setSingleProduct(singleProd)
    // }, [id])
    console.log("single product", singleProduct);
  return (
    <Box position={"absolute"} top={ "200px"}>
   {` Hello,you id=${id} are in Product details page`}
   </Box>
  )
}

export default ProductDetails