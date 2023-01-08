import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Product/action';
import ProductSimple from '../Components/ProductSimple';

const Homepage = () => {
  const dispatch = useDispatch();
  const loading=useSelector((store)=>store.product.loading)
  const products=useSelector((store)=>store.product.data)
  const error=useSelector((store)=>store.product.error)
  useEffect(() => { 
    if (products?.length == 0) { 
      console.log("fetching data")
      dispatch(fetchData())
     }
  }, [dispatch,products?.length])
  console.log("products",products)
  return (
    <ProductSimple data={products} loading={loading} error={error} />
  )
}

export default Homepage