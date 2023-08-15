import React, { useEffect } from 'react';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import {Fragment} from 'react'
import Footer from './components/footer';
import Header from './components/header'
import Explorer from './components/explorer';
import PrivateRoute from './components/PrivateRouter';
import SignIn from './components/sign-in';
import CreateListing from './components/createListing';
import { useDispatch } from 'react-redux';
import { fetchHouses } from './store/houses';
import Offers from './components/offers'
import Sale from './components/sale';
import Rent from './components/rent';
import HouseData from './components/houseData';
import EmailTo from './components/emailto';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHouses())
    })

  
  
  return (
    <Fragment>
       
      <BrowserRouter>
      <Header/>
    <div className="App" >
      <Routes>
        <Route path='/' element={<Explorer/>}/>
        <Route path='/profile' element={<PrivateRoute/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignIn/>}/>
        <Route path='/create-listing' element={<CreateListing/>}/>
        <Route path='/edit-listing/:id' element={<CreateListing/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/sale' element={<Sale/>}/>
        <Route path='/category/rent' element={<Rent/>}/>
        <Route path='/house/:id' element={<HouseData/>}/>
        <Route path='/contact/:id' element={<EmailTo/>}/>
      </Routes>
      </div>
      
    <Footer/>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
