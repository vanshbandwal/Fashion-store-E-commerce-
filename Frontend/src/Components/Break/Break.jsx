import React from 'react'
import './Break.css'
import arrow_icon from '../Assets-2/breadcrum_arrow.png'


const Break = (props) => {
    const {product} = props;
  return (
    <div className='break'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Break