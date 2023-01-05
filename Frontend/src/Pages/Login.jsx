import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box border={"1px solid red"} borderRadius="10px" w={["full", "md"]} mx={"auto"} position="relative" top={'150px'} >
 
        <Heading textAlign={"center"}>Login Form</Heading>
   
      <Flex flexDirection={"column"}>
        <FormControl>
          <FormLabel>Enter Your Email:-</FormLabel>
          <Input type="email"></Input>
          <FormLabel mt="10px">Enter Your password :-</FormLabel>
          <Input type="password"></Input>
          </FormControl>
          <Flex mt="10px" border={"1px solid green"} justifyContent={"space-between"}>
          <Checkbox defaultChecked>Remember me</Checkbox>
             <Button>Forgot your password?</Button>
          </Flex>
          
            <Button mt="10px" mx="auto" border={"1px solid red"} backgroundColor="blue" colorScheme="white" w={["100%","150px"]} type="submit">Login</Button>
           
      </Flex>
   </Box>
  )
}

export default Login