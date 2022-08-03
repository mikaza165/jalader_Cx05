import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-header">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/"><img src={`/assets/images/jia-icon.png`} alt="logo" title="嘉利德" /></Link>
          <h1>Jalader嘉利德</h1>
        </div>
        <input type="checkbox" id="toggler"></input>
        <div className="nav-items">
          <ul>
            <li>简介</li>
            <li>业务</li>
            <Link href={"/about"}>
              <li>关于</li>
            </Link>
            <Link href={"/contact"}><li>联系我们</li></Link>
          </ul>
        </div>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}

        <label htmlFor="toggler" className="navbar-control">
          <div className="hamburger-container">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>


      </div>
    </div>
  )
}

export default Navbar