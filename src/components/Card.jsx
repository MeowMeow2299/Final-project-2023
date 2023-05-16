import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/products/${item.id}>`} className="link"><div className="card">
        <div className="image">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="" className="img"/>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice || item+20}</h3>
            <h3>${item.price}</h3>
        </div>
    </div></Link>
  )
};

export default Card;
