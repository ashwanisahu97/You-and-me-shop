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
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"
import { BsCartFill} from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getFromCart } from '../Redux/Cart/action'
import Wishlist from '../Pages/Wishlist'
const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const cartData=useSelector((store)=>store.cart.cart)
  useEffect(() => { 
  dispatch(getFromCart())
  }, [])
  console.log("cart data", cartData);
  return (
      <Flex fontSize={"xl"} position="fixed" zIndex={"1"} gap="30px" alignItems={"center"} bg="#f7f8f7" w={"100%"}>
          <Link to={"/"}><Image w={ "100"} h="100" src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"></Image></Link>
          <Box><Link to="/men">Men</Link> </Box>
          <Box><Link to="/women">Women</Link></Box>
          <Box><Link to="/electronics">Electronics</Link></Box>
          <Box><Link to="/jewelery">Jewelery</Link></Box>
      <Flex alignItems={"center"}>
        <Box position={"relative"} left={ "30px"}><AiOutlineSearch size={ "30px"} /></Box>
        <Input pl={ "30px"} type={"text"} placeholder={`What are you looking for`} w={ "300px"}></Input>
      </Flex>
      <Flex alignItems={"center"} gap={ "5"} position={"absolute"} right={ "50px"}>
          <Box><Link to="/login">Login</Link></Box>
        <Box><Link to="/signup">Signup</Link></Box>
        <Box>
       <Link to="/cart"><BsCartFill /></Link>
          </Box>
        <Box> <Button ref={btnRef} colorScheme='teal'  onClick={onOpen}>
        <AiOutlineHeart/>
        </Button>
        <Drawer
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
                      <Flex mb="10px" boxSizing='border-box' border={"1px solid red"}>
                      <Box p="5px" w="50%" h="100px">
                      <Image w="100%" h="100%" src={ e.image}></Image>
                        </Box>
                        <Box w="50%">
                          <Text overflow={"hidden"} h="50px">{ e.title}</Text>
                          <Text>Price:{ e.price}</Text>
                          <Button bg="teal" color={"white"} _hover={{bg:"red",color:"white"}}>Add To Cart</Button>
                        </Box>
                      </Flex>
                    )
                  })
                }
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer></Box>
      </Flex>
   </Flex>
  )
}

export default Navbar