import React from 'react'
import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom"
import SearchMovies from './components/Pages/SearchMovies';
import SavedMovies from './components/Pages/SavedMovies';


const App = () => {
  return (
  <BrowserRouter>
<Routes>
  <Route path="/" element={<SearchMovies/>} />
  <Route path="/saved" element={<SavedMovies />} />
</Routes>
</BrowserRouter> 
)
}

export default App