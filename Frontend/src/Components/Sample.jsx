import { Box, FormControl } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import SearchFilter from 'react-filter-search';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Redux/store';

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
           <FormControl 
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
          />
          <SearchFilter 
                    value={searchInput}
                    data={products}
                    renderResults={results =>(
                        <Row className="justify-content-center">
                            {results.map((item, i)=>(
                                <ProductCard data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />
    </Box>
  )
}

export default Sample