import { Box, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <Flex position="fixed" zIndex={"1"} gap="30px" alignItems={"center"} bg="#f7f8f7" w={"100%"}>
          <Link to={"/"}><Image w={ "100"} h="100" src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"></Image></Link>
          <Box><Link to="/men">Men</Link> </Box>
          <Box><Link to="/women">Women</Link></Box>
          <Box><Link to="/electronics">Electronics</Link></Box>
          <Box><Link to="/jewelery">Jewelery</Link></Box>
          <Box>
              <Input type={"text"} placeholder="What are you looking for"></Input>
          </Box>
          <Box><Link to="/login">Login</Link></Box>
          <Box><Link to="/signup">Signup</Link></Box>
   </Flex>
  )
}

export default Navbar