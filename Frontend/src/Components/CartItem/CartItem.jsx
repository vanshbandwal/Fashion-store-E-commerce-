import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/Context'
import remove_icon from "../Assets-2/cart_cross_icon.png"


const CartItem = () => {
    const { all_product, cartItem, removeToCart,getTotalCartAmount,cartItem_size} = useContext(ShopContext)
    
    return (
        <div className='carditem'>
            <div className=" cartitem-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Size</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className='cartitem-format cartitem-format-main'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                            <p>{cartItem_size[e.id]}</p>
                            <p>{e.new_price*cartItem[e.id]}</p>
                            <img className='caritem-remove-icon' src={remove_icon} alt="" onClick={() => { removeToCart(e.id) }} />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className='cartitem-dowm'>
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If ypu have a promocode , Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem