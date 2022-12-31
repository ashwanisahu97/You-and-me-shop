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
    <div>
      {
        loading ? <h1>Data is loading</h1> : error ? <h1>Something went wrong,try again</h1> :
          data?.map((element) => { 
            return (
              <div key={ element.id}>{element.title }</div>
            )
          })
      }
    </div>
  )
}

export default Homepage