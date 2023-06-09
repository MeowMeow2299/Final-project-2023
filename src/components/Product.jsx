import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Info = styled.div`
opacity: 0.9;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(250,204,229, 0,09);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 290px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fce4ec;
position: relative;

&:hover${Info}{
    background-color: #ec407a;
    opacity: 1;
    transform: scale(1.1);
}`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 80%;
z-index: 2;`;

const Icon = styled.div`
opacity: 0.9;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
color: hotpink;
display: flex;
justify-content:center;
margin: 5px;
align-items: center;
transition: all 0.5s ease;

&:hover {
    background-color: #f8bbd0;
    transform: scale(1.1);
}`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img} key={item.id}/>
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>

        <Icon>
        <Link to="/productdetailed" className="link" style={{color: 'inherit',textDecoration: 'none'}}><SearchOutlined/></Link>
        </Icon>

        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product;
