    import React, { createContext, useEffect, useState } from "react";
    

    export const ShopContext = createContext(null);

    let cart = {};    
    const getDefaultCart = () => {
        for (let index = 0; index < 300 + 1; index++) {
            cart[index] = 0;
        }
        return cart;
    
    }
    let cart_size = {}
    const getDefaultCart_size = () => {
        for (let index = 0; index < 300 + 1; index++) {
            cart_size[index] = "S";
        }
        return cart_size;
    }  

    let wishlist_cart = {}
    const get_DefaultWishlist = () => {
        for (let index = 0; index < 300 + 1; index++) {
            wishlist_cart[index] = false
        }
        return wishlist_cart;
    }

    const ShopContextProvider = (props) => {
        const [cartItem, setCartItem] = useState(getDefaultCart())
        const [all_product,setAll_Product] = useState([])

        useEffect(()=>{
            fetch('http://localhost:4000/allproducts').then((response)=>response.json()).then((data)=>setAll_Product(data))

            if(localStorage.getItem('auth-token')){
                fetch('http://localhost:4000/getcart',{
                    method:'POST',
                    headers:{
                       Accept:'application/form-data',
                       'auth-token':`${localStorage.getItem('auth-token')}`,
                       'Content-Type':'application/json' 
                    },
                    body:''
                }).then((response)=>response.json()).then((data)=>setCartItem(data))
            }
        },[])

        const [cartItem_size, setCartItem_size] = useState(getDefaultCart_size())
        const [wishtlistItem, setwishlistItem] = useState(get_DefaultWishlist)
        const addToCart = (itemId) => {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            if(localStorage.getItem('auth-token')){
                fetch('http://localhost:4000/addtocart',{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({'itemId':itemId})
                })
                .then((response)=>response.json()).then((data)=>{console.log(data)})
            }
        }
        const handle_cart_size = (size, id) => {
            setCartItem_size((prev) => ({ ...prev, [id]: size }))
        }
        const handle_wishlist_cart = (id) => {
            setwishlistItem((prev) => ({ ...prev, [id]: !prev[id] }))
            console.log(wishtlistItem)
            alert("Item added to wishlist")

        }
        const removeToCart = (itemId) => {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
         if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'itemId':itemId})
            })
            .then((response)=>response.json()).then((data)=>{console.log(data)})
         }
        }
        //error
        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItem) {
                if (cartItem[item] > 0) {
                    let itemInfo = all_product.find((product) => product.id === Number(item))
                    totalAmount += itemInfo.new_price * cartItem[item];
                    console.log(itemInfo)
                }
            }
            return totalAmount;
        }

        const getTotalCartItem = () => {
            let totalItem = 0;
            for (const item in cartItem) {
                if (cartItem[item] > 0) {
                    totalItem += cartItem[item]
                }
            }
            return totalItem;
        }
        // const getTotalWishlistItem = () => {
        //     let totalWishlist = 0;
        //     for (const item in wishtlistItem) {
        //         if (wishtlistItem[item] === true) {
        //             totalItem ++;
        //         }
        //     }
        //     return totalWishlist;
        // }
        const getTotalWishlistItem = () => {
            let totalItem = 0;
            for (let index = 0; index < wishtlistItem.length; index++) {
                if (wishtlistItem[index] === true) {
                    totalItem++;
                }
                else null
            }
            console.log()
            return totalItem;
        }
        const contextValue = { all_product, cartItem, cartItem_size, wishtlistItem, addToCart, removeToCart, getTotalCartAmount, getTotalCartItem, handle_cart_size, handle_wishlist_cart, getTotalWishlistItem }
        return (
            <ShopContext.Provider value={contextValue} >
                {props.children}
            </ShopContext.Provider>
        )
    }
    export default ShopContextProvider; 
