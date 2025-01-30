import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/BookApp_styles.css' 
import { useSelector } from 'react-redux'


function Header() {

  const cartItems = useSelector(store => store.cart.items);
  console.log('cart items',cartItems)


  return (
    <div className='headerNav'>
        <Link to='/' style={{textDecoration:'none'}}><li>Home</li></Link>
        <Link to='/about' style={{textDecoration:'none'}}><li>About</li></Link>
        <Link to='/contact' style={{textDecoration:'none'}}><li>Contact</li></Link>
    </div>
  )
}

export default Header