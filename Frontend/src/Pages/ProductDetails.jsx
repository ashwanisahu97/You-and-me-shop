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
    <Box border="1px solid red" position={"relative"} top="100px" width="60%" marginX={"auto"} borderRadius="10px">
    <Flex>
      <Box p="10px" w="50%">
        <Image src={ singleProduct?.image}></Image>
      </Box>
      <Box w="50%" boxSizing='border-box' p="20px" fontSize={"20px"}>
        <Heading>{ singleProduct?.title}</Heading>
          <Text>
            <strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{singleProduct?.rating?.rate} ★	</span>
          </Text>
          
        <Text>{ singleProduct?.description}</Text>
        <Text color="red">${ singleProduct?.price}</Text>
      </Box>
      </Flex>
      <Flex h="50px" border={"1px solid red"} justifyContent={"space-between"}>
        <Flex onClick={() => {
          navigate("/cart")
        }} backgroundColor={"tomato"} _hover={{cursor:"pointer",bg:"teal"}} color="white" gap="10px" justifyContent="center" borderRadius="10px" border="1px solid green" alignItems="center" fontSize={"2xl"}  w={"45%"}>
         <Box><BsCartFill/></Box> 
          <Text> Add To Cart </Text>
        </Flex>
        <Flex onClick={() => {
          navigate("/wishlist")
        }} backgroundColor={"tomato"} _hover={{cursor:"pointer",bg:"teal"}} color="white" gap="10px" justifyContent="center" borderRadius="10px" border="1px solid green" alignItems="center" fontSize={"2xl"}  w={"45%"}>
          <Box><AiOutlineHeart/></Box>
          <Text> Add To Wishlist </Text>
        </Flex>
      </Flex>
      </Box>
  )
}

export default ProductDetails


  
         
            
           