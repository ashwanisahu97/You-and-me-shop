import { Box, Flex, Image, Input,MenuButton,MenuItem,MenuList,Menu,useDisclosure, Button, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import { BsCartFill} from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getFromCart } from '../Redux/Cart/action'
import Wishlist from '../Pages/Wishlist'
import { addToWishlist } from '../Redux/Wishlist/action'
const WishlistDrawer = ({ isOpen, onOpen, onClose,btnRef,product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const cartData=useSelector((store)=>store.cart.cart)
  useEffect(() => { 
  dispatch(getFromWishlist())
  }, [])
  const handleAdd = () => { 
    dispatch(addToWishlist())
  }
  console.log("cart data", cartData);
  return (
    <Drawer
            w="400px"
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Wishlist</DrawerHeader>

              <DrawerBody>
                {
                  cartData?.map((e) => {
                    return (
                      <Box key={ e.id} boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px" boxSizing='border-box'  mb="20px">
                      <Flex borderRadius={"10px"}  gap="3" p="5px" boxSizing='border-box' mb='5px'>
                      <Box w="50%" h="110px">
                      <Image w="100%" h="100%" src={ e.image}></Image>
                        </Box>
                        <Box w="50%">
                          <Text fontWeight={"bold"} overflow={"hidden"} h="50px">{ e.title}</Text>
                          <Text fontSize={"lg"}>Price:${ e.price}</Text>
                        </Box>
                        </Flex>
                        <Flex h="30px" justifyContent={"space-between"}>
        <Flex onClick={() => {
          navigate("/cart")
        }} backgroundColor={"teal"} _hover={{cursor:"pointer",bg:"red"}} color="white" gap="2px" justifyContent="center" borderRadius="10px" alignItems="center" fontSize={"xl"}  w={"36%"}>
          <Text> Add To</Text>
         <Box><BsCartFill/></Box> 
        </Flex>
        <Flex onClick={() => {
               handleAdd()
        }} backgroundColor={"teal"} _hover={{cursor:"pointer",bg:"red"}} color="white" gap="2px" justifyContent="center" borderRadius="10px" border="1px solid green" alignItems="center" fontSize={"xl"}  w={"60%"}>
          <Text>Remove From</Text>
          <Box><AiOutlineHeart/></Box>
        </Flex>
      </Flex>
                      </Box>
                    )
                  })
                }
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue' variant='primary' mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default WishlistDrawer