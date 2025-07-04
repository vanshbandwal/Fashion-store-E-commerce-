import React, { useContext, useState } from 'react'
import "./css/Wishlist.css"
import { ShopContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import "../Components/Item/Item.css"


const Wishlist = () => {

  const { wishtlistItem, all_product,addToCart,handle_wishlist_cart } = useContext(ShopContext)
  const [heartbul,setheartbul]=useState(false) 
    const handleHeart = (id)=>{
      setheartbul((prev)=>!prev)
      handle_wishlist_cart(id)
    }
  return (
    <div className='wishlist_container'>
      {all_product.map((e) => {
        if (wishtlistItem[e.id] === true) {
          return <div>
            <div className='item'>
              <div className='item-container'>
                <div><Link to={`/product/${e.id}`}><img src={e.image} alt="" /></Link></div>
              </div>
              <div className='mm'>
                <div className='heart_container'>
                  <p>{e.name}</p>
                  <div className='heart' onClick={() => handleHeart(e.id)}>{heartbul === false ? <FaRegHeart /> : <FaRegHeart className='fill_heart' />}</div>
                </div>
                <div className='button_container_rate'>
                  <div>
                    <div className="item-price-new">
                      ${e.new_price}
                    </div>
                    <div className="item-price-old">
                      ${e.old_price}
                    </div>
                  </div>
                  <div>
                    <button onClick={() => { addToCart(e.id) }}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        return null
      })}
    </div>
  )
}

export default Wishlist