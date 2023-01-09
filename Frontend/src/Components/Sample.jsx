import { Box, FormControl, Grid, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
// import SearchFilter from 'react-filter-search';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Redux/store';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from './ProductSimple';

const Sample = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const products = useSelector((store) => store.product.data)
    useEffect(() => { 
        if (products?.length == 0) { 
          console.log("fetching data")
          dispatch(fetchData())
         }
      }, [dispatch,products?.length])
      console.log("products",products)
  return (
      <Box position="relative" top="100px">
           <Input border={"2px solid red"} 
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
          />
          {/* <SearchFilter 
                    value={searchInput}
                    data={products}
                    renderResults={results =>(
                        <Grid gridGap={"30px"} templateColumns={"repeat(4,1fr)"} >
                            {results.map((item, i)=>(
                                <ProductSimple element={item} key={i} />
                            ))}
                        </Grid>
                    )}
                /> */}
    </Box>
  )
}

export default Sample