import React from 'react'
import ProductCard from '../ProductCard';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import "../../App.css";

function SearchMovies() {

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
    
 export default SearchMovies;