import React from 'react'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "./App.css";




const App = () => {
  return (
   
    
    <div className="w-full bg-white">
      <NavBar/>
      <Header />
      <div className="lg:flex mt-10 justify-center sm:flex-row ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer/>
    </div>


  )
}

export default App