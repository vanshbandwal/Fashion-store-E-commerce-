import React, { useContext, useRef, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets-2/star_icon.png"
import star_dull_icon from "../Assets-2/star_dull_icon.png"
import {ShopContext} from "../../Context/Context"


const ProductDisplay = ({ product }) => {
    const siz5 = useRef()
    const siz1 = useRef()
    const siz2 = useRef()
    const siz3 = useRef()
    const siz4 = useRef()
    const {handle_cart_size} =useContext(ShopContext)
    const [size,setsize] = useState('S')
    const {addToCart} = useContext(ShopContext)
    const handleSize = (size)=>{
        setsize(size)
        handle_cart_size(size,product.id)
        if(size === "S"){
            siz1.current.style.background = "black" 
            siz1.current.style.color = "white" 
            siz2.current.style.background = "white" 
            siz2.current.style.color = "black"
            siz3.current.style.background = "white" 
            siz3.current.style.color = "black"
            siz4.current.style.background = "white" 
            siz4.current.style.color = "black"
            siz5.current.style.background = "white" 
            siz5.current.style.color = "black"
        }
        else if(size === "M"){
            siz1.current.style.background = "white" 
            siz1.current.style.color = "black" 
            siz2.current.style.background = "black" 
            siz2.current.style.color = "white"
            siz3.current.style.background = "white" 
            siz3.current.style.color = "black"
            siz4.current.style.background = "white" 
            siz4.current.style.color = "black"
            siz5.current.style.background = "white" 
            siz5.current.style.color = "black" 
        }
        else if(size === "L"){
            siz1.current.style.background = "white" 
            siz1.current.style.color = "black" 
            siz2.current.style.background = "white" 
            siz2.current.style.color = "black"
            siz3.current.style.background = "black" 
            siz3.current.style.color = "white"
            siz4.current.style.background = "white" 
            siz4.current.style.color = "black"
            siz5.current.style.background = "white" 
            siz5.current.style.color = "black" 
        }
        else if(size === "XL"){
            siz1.current.style.background = "white" 
            siz1.current.style.color = "black" 
            siz2.current.style.background = "white" 
            siz2.current.style.color = "black"
            siz3.current.style.background = "white" 
            siz3.current.style.color = "black"
            siz4.current.style.background = "black" 
            siz4.current.style.color = "white"
            siz5.current.style.background = "white" 
            siz5.current.style.color = "black"
        }
        else{
            siz1.current.style.background = "white" 
            siz1.current.style.color = "black" 
            siz2.current.style.background = "white" 
            siz2.current.style.color = "black"
            siz3.current.style.background = "white" 
            siz3.current.style.color = "black"
            siz4.current.style.background = "white" 
            siz4.current.style.color = "black"
            siz5.current.style.background = "black" 
            siz5.current.style.color = "white"
        }
  
    }
    return (
        <div className='productDisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{122}</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-discription">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore, laudantium nostrum consequuntur consequatur, beatae iusto, porro nemo totam sint reprehenderit consectetur voluptatum tempora
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div onClick={()=>handleSize("S")} ref={siz1}>S</div>
                        <div onClick={()=>handleSize("M")} ref={siz2}>M</div>
                        <div onClick={()=>handleSize("L")} ref={siz3}>L</div>
                        <div onClick={()=>handleSize("XL")} ref={siz4}>XL</div>
                        <div onClick={()=>handleSize("XXL")} ref={siz5}>XXl</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                <p className='productdisplay-right-category'><span>Category : </span>Women ,T Shirt , Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags : </span>Modern, ,T Shirt , Crop Top</p>
            </div>
        </div>
    )
}

export default ProductDisplay