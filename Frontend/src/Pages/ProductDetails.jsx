import React, { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Image,
  Flex,
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from '../Redux/Product/action';
import {useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../Redux/Cart/action';
import {BsCartFill} from "react-icons/bs"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import WishlistDrawer from '../Components/WishlistDrawer';
import { addToWishlist } from '../Redux/Wishlist/action';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
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
  const handleAdd = () => { 
    dispatch(addToCart(singleProduct)).then(() => { 
      navigate("/cart")
    })
  }
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(singleProduct)).then(() => { 
      onOpen();
    })
  }
  console.log("single product",singleProduct)
  console.log("products",products)
  return (
    <Box boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" position={"relative"} top="100px" width="60%" marginX={"auto"} p="5px" borderRadius="10px">
    <Flex>
      <Box p="10px" w="50%" h="350px">
        <Image h="100%" src={ singleProduct?.image}></Image>
      </Box>
      <Box w="50%" boxSizing='border-box' p="10px" fontSize={"20px"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>{ singleProduct?.title}</Text>
          <Text>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <Icon
                      as={AiFillStar}
                      key={i}
                      fontSize="lg"
                      color={i < singleProduct?.rating?.rate ? "yellow.500" : "gray.300"}
                    />
                  ))}
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
          handleAdd();
        }} backgroundColor={"teal"} _hover={{cursor:"pointer",bg:"red"}} color="white" gap="10px" justifyContent="center" borderRadius="10px" alignItems="center" fontSize={"2xl"}  w={"45%"}>
         <Box><BsCartFill/></Box> 
          <Text> Add To Cart </Text>
        </Flex>
        <Flex ref={btnRef} onClick={() => {
           handleAddToWishlist()
        }
         
          } backgroundColor={"teal"} _hover={{ cursor: "pointer", bg: "red" }} color="white" gap="10px" justifyContent="center" borderRadius="10px" border="1px solid green" alignItems="center" fontSize={"2xl"} w={"45%"}>
          <Box><AiOutlineHeart/></Box>
          <Text> Add To Wishlist </Text>
        </Flex>
      </Flex>
      <WishlistDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} product={ singleProduct} />
      </Box>
  )
}

export default ProductDetails


  
         
            
           