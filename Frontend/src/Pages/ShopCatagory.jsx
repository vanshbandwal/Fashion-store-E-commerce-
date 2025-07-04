import React, { useContext } from 'react'
import "./css/ShpCatagory.css"
import { ShopContext } from '../Context/Context'
import dropdown_icon from '../Components/Assets-2/dropdown_icon.png'
import Item from '../Components/Item/Item'


const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext)
  console.log(all_product)
  return (
    <div className='shop-category'>
      <img className='shop-category_img' src={props.banner} alt="" />
      {/* <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className='shopcategory-sort'>
          Sort by <img className='shopcategory-banner' src={dropdown_icon} alt="" />
        </div>
      </div> */}
      <div className='shopcategory-product'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCatagory     