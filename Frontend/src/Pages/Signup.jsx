import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Box  boxShadow={'lg'} rounded={'lg'} borderRadius="10px" w={["full", "md"]} mx={"auto"} position="relative" top={'100px'} p={"10px"} >
 
        <Heading  mb="20px" textAlign={"center"}> Create your account</Heading>
   
      <Flex flexDirection={"column"}>
        <FormControl isRequired>
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
          <Text>Already have an account?</Text>
             <Text>Please <Link textDecoration={"underline"}> Login </Link>here</Text>
          </Flex>
          <Button  mt="20px" type={ "submit"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.700',
                  }}>
                  Sign up
                </Button>
           
      </Flex>
   </Box>
  )
}

export default Signup