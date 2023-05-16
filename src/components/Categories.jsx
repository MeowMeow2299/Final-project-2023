import Card from "./Card";
import "./Categories.scss"
import useFetch from "./hooks/useFetch";

// import { mobile } from "../../responsive";


const Categories = ({ type }) => {
  const data = [
    {
      id: "1",
      img: "./images/1.png",
      title: "Two-pieces long sleeve sproties greenbackie",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: "2",
      img: "./images/Product 107.png",
      title: "High Heel Cut Liner Dress Party Blackie for Woman",
      isNew: true,
      oldPrice: 20,
      price: 15,
    },

    {
      id: "3",
      img: "./images/Product 888.png",
      title: "Two-strings Violet Patteled Dresses Dreamer Day",
      isNew: true,
      oldPrice: 27,
      price: 13,
    },

    {
      id: "4",
      img: "./images/Product 333.png",
      title: "Two-pieces printer material animal bikini for summer",
      isNew: true,
      oldPrice: 38,
      price: 25,
    },

    {
      id: "5",
      img: "./images/Product 222.png",
      title: "SWEATIES",
      isNew: true,
      oldPrice: 25,
      price: 15,
    },
  ];
  // const {loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`
  // );
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Recommend for you</h1>
        <p>It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here'. </p></div>
      <div className="bottom">
        {data.map((item) => (<Card item={item} key={item.id} />))};
        
      </div>
    </div>


  );
};

export default Categories
