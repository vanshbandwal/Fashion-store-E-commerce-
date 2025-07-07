import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allproduct, setAllproduct] = useState([])

  const fetchInfo = async () => {
    await fetch('https://fashion-store-e-commerce-one.vercel.app/allproducts').then((res) => res.json()).then((data) => { setAllproduct(data) })
  }
  useEffect(() => {
    fetchInfo();
  }, [])
  const remove_product = async(id)=>{
    await fetch('https://fashion-store-e-commerce-one.vercel.app/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className='listproduct-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproduct'>
        <hr />
        {allproduct.map((product, index) => {
          return <>
            <div className='listproduct-format-main listproduct-format' key={index}>
              <img src={product.image} alt="" className='listproduct-product-icon' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img src={cross_icon} alt="" className='listproduct-remove-icon' onClick={()=>{remove_product(product.id)}}/>
            </div>
            <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
