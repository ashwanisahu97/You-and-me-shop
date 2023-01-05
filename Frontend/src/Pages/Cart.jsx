import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFromCart } from '../Redux/Cart/action';

const Cart = () => {
  const dispatch = useDispatch();
  const cartData=useSelector((store)=>store.cart.data)
  useEffect(() => { 
  dispatch(getFromCart())
  }, [])
  console.log("cartData", cartData);
  return (
      <Box position={"absolute"} top={ "200px"}>
    Hello,you are in cart page
   </Box>
  )
}

export default Cart