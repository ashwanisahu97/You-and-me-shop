import { Box, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"
import { BsCartFill} from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
const Navbar = () => {
  return (
      <Flex position="fixed" zIndex={"1"} gap="30px" alignItems={"center"} bg="#f7f8f7" w={"100%"}>
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
        <Box><BsCartFill/></Box>
        <Box><AiOutlineHeart/></Box>
      </Flex>
   </Flex>
  )
}

export default Navbar