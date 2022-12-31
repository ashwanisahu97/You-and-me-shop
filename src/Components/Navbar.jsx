import { Box, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <Flex gap="30px" alignItems={"center"} bg="#f7f8f7">
          <Link to={"/"}><Image w={ "100"} h="100" src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"></Image></Link>
          <Box><Link to="/men">Men</Link> </Box>
          <Box><Link to="/women">Women</Link></Box>
          <Box><Link to="/boys">Boys</Link></Box>
          <Box><Link to="/girls">Girls</Link></Box>
          <Box>
              <Input type={"text"} placeholder="What are you looking for"></Input>
          </Box>
          <Box><Link to="/login">Login</Link></Box>
          <Box><Link to="/signup">Signup</Link></Box>
   </Flex>
  )
}

export default Navbar