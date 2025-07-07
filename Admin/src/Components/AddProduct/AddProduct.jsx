import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
const AddProduct = () => {
    const [image,setimage] = useState(false);
    const[productDetails,setproductDetails] = useState({
        name:'',
        image:'',
        category:'women',
        new_price:'',
        old_price:''

    })
    const imageHandler = (e)=>{
        setimage(e.target.files[0])
    }


    const changeHandler = (e)=>{
        setproductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async ()=>{
        console.log(productDetails)
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image)

        await fetch('https://fashion-store-e-commerce-one.vercel.app/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData = data})
        if(responseData.success){
            product.image = responseData.image_url
            console.log(product)
            await fetch('https://fashion-store-e-commerce-one.vercel.app/addproduct',{
                method:'POST',
                headers:{
                    Accept:'Application/json',
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{data.success?alert("product added"):alert("failed")

            })
        }


    }
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input type="text" name="name" placeholder='Type here' onChange={changeHandler} value={productDetails.name}/>
        </div>
        <div className='addproduct-price'>
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input type="text" name="old_price" placeholder='Type here'  onChange={changeHandler} value={productDetails.old_price}/>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input type="text" name="new_price" placeholder='Type here'  onChange={changeHandler} value={productDetails.new_price}/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="women">Women</option>
                <option value="men">men</option>
                <option value="kid">kid</option>
            </select>
        </div>
        <div className='addproduct-itemfield'>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
            </label>
            <input onChange = {imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button className='addproduct-btn' onClick={Add_Product}> Add
        </button>
    </div>
  )
}

export default AddProduct
