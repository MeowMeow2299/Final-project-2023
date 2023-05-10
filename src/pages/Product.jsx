import styled from "styled-components"
import Newletter from "../components/Newletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`

`;
const Navbar = styled.div`
padding: 10px 20px ;
align-items: center;
margin-top: 10px;
bottom: 0;
`;

const Logo = styled.h1`
font-weight: bold;
font-size: 45px;
text-align: center;
`;
const Amix = styled.div`
padding:5px 10px ;
align-items: center;
text-align: center;
justify-content: space-between;
background-color: #fce4ec;
`;

const Meowtitle = styled.p`
align-items: center;
justify-content: center;
`;

const Meow = styled.span`
font-size: 16px;
font-weight: 400;
margin: 22px;
text-align: center;
justify-content: center;
cursor: pointer;
`;

const Wrapper = styled.div`

padding: 50px;
display: flex;

`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`

width: 100%;
height: 90hv;
object-fit: cover;
`;

const InfoContainer = styled.div`
 flex: 1;
 padding: 0px 50px;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
 margin: 20px 0px;
`;

const Price = styled.span`
font-size: 40px;
font-weight: bold 100;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 300;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=> props.color};
margin: 0px 10px;
cursor: pointer;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid pink;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid pink;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
  background-color: #ffd1dc;
}
`;


const Product = () => {
  return (
    <Container>
    <Navbar>
        <Logo>MEOW MEOW</Logo>
      </Navbar>
      <Amix>
        <Meowtitle>
          <Meow>Freeship for the first bill over $5</Meow>
        </Meowtitle>
      </Amix>
      <Wrapper>
        <ImgContainer>
          <Image src="./images/Product 111.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Dress Exposed Back Lace Up Tie Up High Cup Plain Color Sexy</Title>
          <Desc>
            Fabric: Light stretch <br></br> <br></br>
            Type: Slim and Slim <br></br> <br></br>
            Ingredients: 93% polyester, 7% spandex cotton <br></br> <br></br>
            Style: Two strings
          </Desc>
          <Price>$25</Price>
          <FilterContainer>
          <Filter>
          <FilterTitle>Color</FilterTitle>
          <FilterColor color="orange"/>
          </Filter>

          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
          </FilterContainer>
          <AddContainer>
            <Remove/>
            <Amount>1</Amount>
            <Add/>
            <AmountContainer>
              <Button>ADD TO CART</Button>
            </AmountContainer>
          </AddContainer>
          
        </InfoContainer>
      </Wrapper>
      <Newletter/>
      <Footer/>
    </Container>
  )
}

export default Product
