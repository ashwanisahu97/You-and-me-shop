
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFromCart } from '../Redux/Cart/action';
import { Badge, Box, Button, Container, Flex, Grid, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react';


//* redux & redux actions

// import { decreaseCartQuantity, deleteAllFromCart, increaseCartQuantity, removeDataFromCart } from '../Redux/action';

//* Currency formatter 
// import { formatCurrency } from '../utilities/formatCurrency';
import { AiFillStar } from 'react-icons/ai';

const Cart = () => {
  const dispatch = useDispatch();
  const cartData=useSelector((store)=>store.cart.cart)
  useEffect(() => { 
  dispatch(getFromCart())
  }, [])
  console.log("cartData", cartData);

    return (
        <Container maxW='container.xl'>

            <Text fontSize={ '4xl' }>Cart</Text>

            <Flex justify='flex-end' >
                <Button bg='red.500' disabled={ cartData.length < 1 } color='white' _hover={ { color: 'red', bg: 'white', border: '1px solid red' } } m='2'>DELETE ALL
                </Button>
            </Flex>


            <SimpleGrid columns={ [ 1, 2, 3, 4 ] } spacing='40px' pt='10'  >

                { cartData && cartData.map((item) => (
                    <Box key={ item.id } borderWidth='1px' borderRadius='lg' overflow='hidden'>

                        <Image src={ item.image } alt={ item.category } h='200px' w='full' p='2'
                            objectFit='contain' />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>

                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Category
                                </Badge>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    { item.category }
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={ 1 }
                            >
                                { item.title }
                            </Box>

                            <Box as='h1' color='gray.600' fontWeight='bold'>
                                {/* { formatCurrency(item.price) } */}
                            </Box>

                            <Box display='flex' mt='2' justifyContent='center' alignItems='center'>
                                { Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <Icon as={ AiFillStar }
                                            key={ i }
                                            color={ i < item.rating.rate ? 'teal.500' : 'gray.300' }
                                        />
                                    )) }
                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                    { item.rating.count } reviews
                                </Box>
                            
                            </Box>


                            <Flex justify='center' align='center' mt={ 5 }>

                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } m='2' disabled={ item.quantity === 1 }>-</Button>

                                <Text fontSize='3xl' m='2'>{ item.quantity }</Text>

                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } m='2'>+</Button>

                            </Flex>

                            <Button w='full' bg='red.500' color='white' _hover={ { color: 'red', bg: 'white', border: '1px solid red' } } m='2'>DELETE</Button>

                        </Box>
                    </Box>
                )) }
            </SimpleGrid>
        </Container>

    );
};
export default Cart