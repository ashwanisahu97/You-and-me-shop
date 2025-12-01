import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import { useNavigate } from 'react-router-dom';
import ProductSimple from '../Components/ProductSimple';
import { Box, Flex, Grid, Select, Text } from '@chakra-ui/react';
import Loader from '../Components/Loader';

const Men = () => {
  const dispatch = useDispatch();
  const [mensData, setMensData] = useState([])
  const [sort, setSort] = useState("");
  const loading = useSelector((store) => store.product.loading)
  const products = useSelector((store) => store.product.data)
  const error = useSelector((store) => store.product.error)
  useEffect(() => {
    console.log("hello i am from men")
    if (products.length === 0) {
      console.log("upper useEffect")
      dispatch(fetchData())
    }
  }, [])

  useEffect(() => {
    if (products.length !== 0) {
      const mensWear = products?.filter((element) => {
        console.log("men element", element);
        return element?.category ===
          "men's clothing";
      })
      console.log("mensWear", mensWear)
      setMensData(mensWear)
    }
  }, [products.length])
  const sortbyPrice = (e) => {
    let sortValue = e.target.value;
    console.log(sortValue);
    let temp = [...mensData];
    if (sortValue === "lth") {
      temp.sort((a, b) => a.price - b.price);
    } else {
      temp.sort((a, b) => b.price - a.price)
    }
    setMensData(temp);
  }
  console.log("sort value", sort);
  console.log("mensData", mensData);
  return (
    <Box w="100%">
      <Flex zIndex={"20"} pt="50px" ml="566px" justifyContent="center" alignItems="center">
        <Box pt="7px" position={"fixed"} zIndex={"10"}>
          <Select fontSize={"16px"} onChange={sortbyPrice}>
            <option>Sort by price</option>
            <option value="lth">low to high</option>
            <option value="htl">high to low</option>
          </Select>
        </Box>
      </Flex>
      <Grid templateColumns={"repeat(4,1fr)"} position={"absolute"} top={"100px"}>
        {
          loading ? <Loader/> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
            mensData?.map((element) => {
              console.log("element", element)
              return (
                <ProductSimple element={element} key={element.id} />
              )
            })
        }
      </Grid>
    </Box>
  )
}

export default Men