import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../components/Cart.scss"

const Cart = () => {
  
  const products = useSelector(state => state.cart.products)
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  }
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="cart">
        <h1> Product in your cart</h1>
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0,100)}</p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
              <DeleteOutline className="delete" />
            </div>
          </div>
        ))}
        <div className="total">
          <span>TOTAL</span>
          <span>{totalPrice()}</span>
        </div>
        <butoon>PROCCED TO CHECKOUT</butoon>
        <span className="reset">Reset Cart</span>
      </div>

      <Footer />
    </div>

  )
};

export default Cart;
// process.env.REACT_APP_UPLOAD_URL +
