import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { validate } from '../Components/validate';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  let initState = {
    firstName: "",
    lastName: "",
    email: "",
    password:""
  }
  const [formValues, setFormValues] = useState(initState);
  const [formErrors, setFormErrors] = useState({});
  
  const submitHandle = (e) => { 
    setFormErrors(validate(formValues))
    console.log("formValues", formValues);
    console.log("formErrors", formErrors);
  }

  return (
    <Box  boxShadow={'lg'} rounded={'lg'} borderRadius="10px" w={["full", "md"]} mx={"auto"} position="relative" top={'50px'} p={"5px"} >
      { JSON.stringify(formValues)}
        <Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={5} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={(e) => setFormValues({...formValues,firstName:e.target.value})} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e) => setFormValues({...formValues,lastName:e.target.value})}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setFormValues({...formValues,email:e.target.value})}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setFormValues({...formValues,password:e.target.value})} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                  onClick={submitHandle}
                loadingText="Submitting"
                size="lg"
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.400',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
   </Box>
  )
}

export default Signup