import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFromCart } from "../Redux/Cart/action";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

//* redux & redux actions

// import { decreaseCartQuantity, deleteAllFromCart, increaseCartQuantity, removeDataFromCart } from '../Redux/action';

//* Currency formatter
// import { formatCurrency } from '../utilities/formatCurrency';
import { AiFillStar } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.cart);
  useEffect(() => {
    dispatch(getFromCart());
  }, []);
  console.log("cartData", cartData);

  return (
    <Container maxW="container.xl">
      <Text fontSize={"4xl"}>Cart</Text>

      <Flex justify="flex-end">
        <Button
          bg="red.500"
          disabled={cartData.length < 1}
          color="white"
          _hover={{ color: "red", bg: "white", border: "1px solid red" }}
          m="2"
        >
          DELETE ALL
        </Button>
      </Flex>

      <Box columns={[1, 2, 3, 4]} spacing="40px" pt="10">
        {cartData?.map((item) => (
          <Flex
            p="10px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"  
            mb="20px"
          gap="10px"
            justifyContent={"center"}
            alignItems="center"
            h="300px"
            key={item.id}
            borderRadius="lg"
          >
            <Box
             
              boxSizing="border-box"
             h="300px"
              w="600px"
              p="10px"
             
            >
              <Image
                 borderRadius={"10px"}
             boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              src={item.image}
              alt={item.category}
                w="100%"
                h="100%"
            />
    
    </Box>
            <Box
                fontWeight="semibold"
                as="h4"
              lineHeight="tight"
              w="500px"
            >
              <Text color={"grey"} fontSize={"2xl"}>Title</Text>
              <Text color={"grey.300"}>{item.title}</Text>
              </Box>

            <Box
                justifyContent="center"
                alignItems="center"
              >
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <Icon
                      as={AiFillStar}
                      key={i}
                      color={i < item?.rating?.rate ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box p={"10px"} as="span" w="100px" color="gray.600" fontSize="sm">
                  {item?.rating?.count} reviews
                </Box>
              </Box>

             
            <Button
              w="350px"
              h="60px"
              fontSize={"4xl"}
                  bg="blue.500"
                  color="white"
                  _hover={{
                    bg: "blue.800",
                    color: "white",
                    border: "1px solid blue",
                  }}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>


            <Button
              w="350px"
              h="60px"
              fontSize={"4xl"}
                  bg="blue.500"
                  color="white"
                  _hover={{
                    bg: "blue.800",
                    color: "white",
                    border: "1px solid blue",
                  }}
                >
                  +
                </Button>

            <Button
              fontSize={"xl"}
             w="350px"
             h="60px"
                bg="red.500"
                color="white"
                _hover={{ bg: "red.700", color: "white", border: "1px solid red" }}
              >
                DELETE
              </Button>
          </Flex>
        ))}
      </Box>
    </Container>
  );
};
export default Cart;
