import React, { useEffect, useState } from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from '../Redux/Product/action';
import {useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../Redux/Cart/action';
import { BsCart, BsCartFill} from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector(store => store.product.data);
  const [singleProduct, setSingleProduct] = useState({});
  // const { title, price, description, rating, category,image } = singleProduct; 
  useEffect(() => { 
     dispatch(fetchData())
  }, [])
  useEffect(() => { 
    const prod = products?.find((e) => e.id == id);
 setSingleProduct(prod)
  }, [products.length])
  console.log("single product",singleProduct)
  return (
    <Box boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" position={"relative"} top="100px" width="60%" marginX={"auto"} borderRadius="10px">
    <Flex>
      <Box p="10px" w="50%" h="400px">
        <Image h="100%" src={ singleProduct?.image}></Image>
      </Box>
      <Box w="50%" boxSizing='border-box' p="10px" fontSize={"20px"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>{ singleProduct?.title}</Text>
          <Text>
            <strong>Rating :</strong> <span style={{ background: "white", color: "red.500", padding: "2px 5px", borderRadius: "5px" }}>{singleProduct?.rating?.rate} ★	</span>
          </Text>
          
          <Text color={"grey.500"}>{singleProduct?.description}</Text>
          <Flex gap={"5px"}>
            <Text fontWeight={"bold"} color={"grey.300"}>Price</Text>
        <Text color="red">${ singleProduct?.price}</Text>
          </Flex>
      </Box>
      </Flex>
      <Flex h="50px" justifyContent={"space-between"}>
        <Flex onClick={() => {
          navigate("/cart")
        }} backgroundColor={"teal"} _hover={{cursor:"pointer",bg:"red"}} color="white" gap="10px" justifyContent="center" borderRadius="10px" border="1px solid green" alignItems="center" fontSize={"2xl"}  w={"45%"}>
         <Box><BsCartFill/></Box> 
          <Text> Add To Cart </Text>
        </Flex>
        <Flex onClick={() => {
          navigate("/wishlist")
        }} backgroundColor={"teal"} _hover={{cursor:"pointer",bg:"red"}} color="white" gap="10px" justifyContent="center" borderRadius="10px" border="1px solid green" alignItems="center" fontSize={"2xl"}  w={"45%"}>
          <Box><AiOutlineHeart/></Box>
          <Text> Add To Wishlist </Text>
        </Flex>
      </Flex>
      </Box>
  )
}

export default ProductDetails


  
         
            
           