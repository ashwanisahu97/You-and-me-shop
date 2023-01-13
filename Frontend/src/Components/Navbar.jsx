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
import WishlistDrawer from './WishlistDrawer'
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Flex fontFamily={`Whitney, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`} fontSize={"16px"} color={ "#282c3f"} fontWeight="500" lineHeight="80px" position="fixed" zIndex={"1"} gap="30px" alignItems={"center"} bg="#f7f8f7" w={"100%"}>
          <Link to={"/"}><Image w={ "100"} h="100" src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"></Image></Link>
          <Box><Link to="/men">Men</Link> </Box>
          <Box><Link to="/women">Women</Link></Box>
          <Box><Link to="/electronics">Electronics</Link></Box>
          <Box><Link to="/jewelery">Jewelery</Link></Box>
     
      <Flex alignItems={"center"} gap={ "5"} position={"absolute"} right={ "50px"}>
          <Box><Link to="/login">Login</Link></Box>
        <Box><Link to="/signup">Signup</Link></Box>
        <Box>
       <Link to="/cart"><BsCartFill fontSize={"30px"} /></Link>
          </Box>
        <Box> <Box ref={btnRef} color='red' onClick={onOpen}>
        <AiOutlineHeart fontSize={"30px"}/>
        </Box>
        <WishlistDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={ btnRef} />
          </Box>
      </Flex>
   </Flex>
  )
}

export default Navbar