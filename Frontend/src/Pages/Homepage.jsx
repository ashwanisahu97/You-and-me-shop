import React, { useEffect } from 'react'

const Homepage = () => {
  useEffect(() => { 
    fetchData();
  }, [])
  const fetchData = async() => { 
  const response=await fetch(`http:`)
  }
  return (
    <div>Homepage</div>
  )
}

export default Homepage