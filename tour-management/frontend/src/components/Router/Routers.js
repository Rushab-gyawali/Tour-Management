import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../../Pages/Home';
import Tours from '../../Pages/Tours'
import TourDetail from '../../Pages/TourDetail'
import Register from '../../Pages/Register'
import Login from '../../Pages/Login'
import SearchResultList from '../../Pages/SearchResultList'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ="/home"/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tours/:id' element={<TourDetail/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/tours/search' element={<Login/>} />
        <Route path='/login' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers