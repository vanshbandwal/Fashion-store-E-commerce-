import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ShopCatagory from './Pages/ShopCatagory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer'
import ShopContextProvider from './Context/Context'
import men_banner from './Components/Assets-2/banner_mens.png'
import women_banner from './Components/Assets-2/banner_women.png'
import kids_banner from './Components/Assets-2/banner_kids.png'
import Wishlist from './Pages/Wishlist'


function App() {

  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatagory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCatagory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/wishlist' element={<Wishlist/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
