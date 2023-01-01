import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box  border={ "1px solid red"} w={"30%"} margin={ "auto"} position="relative" top={'150px'} >
      <VStack>
        <FormControl>
          <FormLabel>Enter Your Email:-</FormLabel>
          <Input type="email"></Input>
          <FormLabel>Enter Your password :-</FormLabel>
          <Input type="password"></Input>
          <HStack justifyContent={"space-between"}>
          <HStack>
          <Checkbox defaultChecked></Checkbox>
            <Text>remember me</Text>
            </HStack>
            <Text>forgot your password?</Text>
          </HStack>
          <Flex justifyContent={"center"} alignItems="center">
            <Button border={"1px solid red"} w={"200px"} type="submit">Submit</Button>
            </Flex>
        </FormControl>
      </VStack>
   </Box>
  )
}

export default Login