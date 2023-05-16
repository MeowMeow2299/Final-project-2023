import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../redux/cartReducer"
import "./CardShop.scss"
import { useDispatch } from "react-redux"
import useFetch from "../components/hooks/useFetch";
import { FavoriteBorder } from "@material-ui/icons";
import Navbar from "../components/Navbar";


const CardShop = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populated=*`);
  const images = [
    "./images/Doc1.png",
  ];
  return (
    
      <div>
    <Navbar/>
    <div className="product">
    
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Long Orange Dress Cut High Heel Pirtner</h1>
        <span className="price">$25</span>
        <p>Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </button>
        </div>
        <div className="add">
          <button className="add" onClick={() => dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity,
          }))}>CHECKOUT NOW</button>
        </div>
       </div>
       
    </div>
    <Footer/>
</div>
  )
};

export default CardShop;
