import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/products/${item.id}>`} className="link"><div className="card">
        <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" className="img"/>
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice || item?.attributes+20}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
    </div></Link>
  )
};

export default Card;
