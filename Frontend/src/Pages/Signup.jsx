import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Box  boxShadow={'lg'} rounded={'lg'} borderRadius="10px" w={["full", "md"]} mx={"auto"} position="relative" top={'150px'} p={"10px"} >
 
        <Heading  mb="20px" textAlign={"center"}> Create your account</Heading>
   
      <Flex flexDirection={"column"}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="email" isRequired></Input>
          <FormLabel mt="10px">Last Name</FormLabel>
          <Input type="password" isRequired></Input>
          <FormLabel>Email address</FormLabel>
          <Input type="email"></Input>
          <FormLabel mt="10px">Password</FormLabel>
          <Input type="password" isRequired></Input>
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
                  Sign up
                </Button>
           
      </Flex>
   </Box>
  )
}

export default Signup