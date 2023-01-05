import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box border={"1px solid red"} borderRadius="10px" w={["full", "md"]} mx={"auto"} position="relative" top={'150px'} p={"10px"} >
 
        <Heading  mb="20px" textAlign={"center"}> Login to your account</Heading>
   
      <Flex flexDirection={"column"}>
        <FormControl>
          <FormLabel>Enter Your Email:-</FormLabel>
          <Input type="email"></Input>
          <FormLabel mt="10px">Enter Your password :-</FormLabel>
          <Input type="password"></Input>
          </FormControl>
          <Flex mt="10px" justifyContent={"space-between"}>
          <Checkbox defaultChecked>Remember me</Checkbox>
             <Button>Forgot your password?</Button>
          </Flex>
          <Button  mt="20px" type={ "submit"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
           
      </Flex>
   </Box>
  )
}

export default Login