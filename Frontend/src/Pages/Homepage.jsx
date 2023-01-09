import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from '../Components/ProductSimple';
import { Box, Flex, Grid ,Input,Text} from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai"
import SearchResults from 'react-filter-search';
const Homepage = () => {
  const dispatch = useDispatch();
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => { 
    if (products?.length == 0) { 
      console.log("fetching data")
      dispatch(fetchData())
     }
  }, [dispatch,products?.length])
  console.log("products",products)
  return (
    <Box>
      <Flex zIndex={"20"} pt="30px" border={"2px solid green"} ml="600px" alignItems="center">
 <Flex>
      <Box pt="7px" position={"fixed"}  zIndex={"10"}><AiOutlineSearch size={ "30px"} /></Box>
          <Input position={"fixed"} border={"1px solid red"} zIndex={"10"} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} fontSize={"xl"} pl={"30px"} type={"text"} placeholder={`What are you looking for`} w={"300px"}></Input>
          </Flex>
          </Flex>
    <Box position={"absolute"} top={"100px"} >
      {
        loading ? <Text w={"200px"} mx="auto" color="red">Data is loading </Text> : error ? <Text color="red" mx={"auto"}>Something went wrong,please try again</Text> :
        <SearchResults
        value={searchInput}
        data={products}
        renderResults={results =>(
            <Grid gridGap={"30px"} templateColumns={"repeat(4,1fr)"} >
                {results.map((item, i)=>(
                    <ProductSimple element={item} key={i} />
                ))}
            </Grid>
        )}
    />
      }
      </Box>
      </Box>
  )
}

export default Homepage