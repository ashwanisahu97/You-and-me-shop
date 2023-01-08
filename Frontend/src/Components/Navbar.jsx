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
import { AiOutlineSearch } from "react-icons/ai"
import { BsCartFill} from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getFromCart } from '../Redux/Cart/action'
import Wishlist from '../Pages/Wishlist'
const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
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
        <Input fontSize={"xl"} pl={ "30px"} type={"text"} placeholder={`What are you looking for`} w={ "300px"}></Input>
      </Flex>
      <Flex alignItems={"center"} gap={ "5"} position={"absolute"} right={ "50px"}>
          <Box><Link to="/login">Login</Link></Box>
        <Box><Link to="/signup">Signup</Link></Box>
        <Box>
       <Link to="/cart"><BsCartFill fontSize={"30px"} /></Link>
          </Box>
        <Box> <Box ref={btnRef} color='red' onClick={onOpen}>
        <AiOutlineHeart fontSize={"30px"}/>
        </Box>
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
                      <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px" boxSizing='border-box'  mb="20px">
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
          navigate("/wishlist")
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
      </Drawer></Box>
      </Flex>
   </Flex>
  )
}

export default Navbar