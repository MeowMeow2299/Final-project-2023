import React from 'react'
import "./GridTemplate.scss"
import { Link } from 'react-router-dom'

const GridTemplate = () => {
  return (
    <div className="gridtemplate">
      <div className="col">
        <div className="row">
            <img src="./images/Product 202.png"/>
            <button>
                <Link to="/productdetailed" className="link">Accessories</Link>
            </button>
        </div>
        <div className="row">
        <img src="./images/Product 203.png"/>
            <button>
                <Link to="/productdetailed" className="link">Blazer</Link>
            </button>
        </div>
      </div>
      <div className="col">
      <div className="row">
      <img src="./images/Product 999.png"/>
            <button>
                <Link to="/productdetailed" className="link">Dresses</Link>
            </button>
      </div>
      </div>
      <div className="col col-l">
      <div className="row">
        <div className="col">
            <div className="row">
            <img src="./images/Product 106.png"/>
            <button>
                <Link to="/productdetailed" className="link">Two-pieces</Link>
            </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="./images/Product 200.png"/>
            <button>
                <Link to="/productdetailed" className="link">Bikini</Link>
            </button>
            </div>
        </div>
      </div>
      <div className="row">
      <img src="./images/Product 201.png"/>
            <button>
                <Link to="/productdetailed" className="link">Beauty</Link>
            </button>
      </div>
      </div>
    </div>
  )
}

export default GridTemplate
