import { Box, Image,Text,Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const loading=useSelector((store)=>store.loading)
  const products=useSelector((store)=>store.data)
  const error=useSelector((store)=>store.error)
  useEffect(() => { 
    fetchData();
  }, [])
  const fetchData = async () => { 
    
    const response = await fetch(`http://localhost:8080/products`)
    let res = await response.json();
    setData(res)
    console.log(response);
    console.log(res);
  }
  console.log(data);
  return (
    <Flex w={ "100%"} gap={ "5%"} position={"relative"} top={ "100px"} border={"4px solid red"} flexWrap={"wrap"}>
      {
        loading ? <h1>Data is loading</h1> : error ? <h1>Something went wrong,try again</h1> :
          data?.map((element) => { 
            return (
              <Box key={element.id} w={ "20%"}>
                <Box h={ "250px"}><Image w={"100%"} h={ "100%"} src={element.image}></Image></Box>
                <Box>
                <Text>{element.title }</Text>
                <Text>{element.price }</Text>
                </Box>
              </Box>
            )
          })
      }
    </Flex>
  )
}

export default Homepage