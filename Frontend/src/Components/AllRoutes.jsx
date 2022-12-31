import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Girls from '../Pages/Girls'
import Boys from '../Pages/Boys'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Homepage from '../Pages/Homepage'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <Homepage/>}></Route>
          <Route path="/men" element={ <Men/>}></Route>
          <Route path="/women" element={ <Women/>}></Route>
          <Route path="/girls" element={ <Girls/>}></Route>
          <Route path="/boys" element={ <Boys/>}></Route>
          <Route path="/login" element={ <Login/>}></Route>
          <Route path="/signup" element={ <Signup/>}></Route>
   </Routes>
  )
}

export default AllRoutes