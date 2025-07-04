import React from 'react'
import footer_logo from '../Assets-2/logo_big.png'
import './Footer.css'
import instagram_icon from '../Assets-2/instagram_icon.png'
import pintester_icon from '../Assets-2/pintester_icon.png'
import whatapp_icon from '../Assets-2/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
              <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
              <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
              <img src={whatapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @2025</p>
        </div>
    </div>
  )
}

export default Footer