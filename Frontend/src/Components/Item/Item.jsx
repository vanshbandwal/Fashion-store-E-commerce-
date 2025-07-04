import React, { useContext, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Context'
import { FaRegHeart } from "react-icons/fa";

const Item = (props) => {

  const { addToCart,handle_wishlist_cart} = useContext(ShopContext)
  const [heartbul,setheartbul]=useState(false) 
  const handleHeart = ()=>{
    setheartbul((prev)=>!prev)
    handle_wishlist_cart(props.id)
  }
  return (
    <div className='item'>
      <div className='item-container'>
        <div><Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link></div>
      </div>
      <div className='mm'>
        <div className='heart_container'>
          <p>{props.name}</p>
          <div className='heart' onClick={()=>handleHeart()}>{heartbul === false ? <FaRegHeart/> : <FaRegHeart className='fill_heart'/>}</div>
        </div>
        <div className='button_container_rate'>
          <div>
            <div className="item-price-new">
              ${props.new_price}
            </div>
            <div className="item-price-old">
              ${props.old_price}
            </div>
          </div>
          <div>
            <button onClick={() => { addToCart(props.id) }}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item