import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets-2/logo.png'
import cart_icon from '../Assets-2/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Context'
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  const [underline,setunderline] = useState("Shop")
  const {getTotalCartItem,getTotalWishlistItem} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setunderline("Shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{underline === "Shop" ? <hr/>: null}</li>
        <li onClick={()=>{setunderline("Men")}}><Link to="/mens" style={{textDecoration:'none'}}>Men</Link>{underline === "Men" ? <hr/>: null}</li>
        <li onClick={()=>{setunderline("Women")}}><Link to="/womens" style={{textDecoration:'none'}}>Women</Link>{underline === "Women" ? <hr/>: null}</li>
        <li onClick={()=>{setunderline("Kids")}}><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>{underline === "Kids" ? <hr/>: null}</li>
      </ul>
      <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');
            window.location.replace('/')
          }}>Logout</button>: <Link to="/login"><button>Login</button></Link>}
          <Link to="/wishlist"><FaRegHeart className='wishlist_list'/></Link>
          {/* <div className="nav-cart-count">{getTotalWishlistItem()}</div> */}
          <Link to="/cart"><img src={cart_icon} alt="cart_icons" /></Link>
          <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar