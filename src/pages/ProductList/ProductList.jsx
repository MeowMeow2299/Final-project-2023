import styled from "styled-components"
import Products from "../../components/Products";
import Newletter from "../../components/Newletter";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";


const Container = styled.div`
height: 60px;
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
color: inherit;
text-decoration: none;
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

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: rows;
`;

const Filter = styled.div`
margin: 20px;
justify-content: space-between;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
flex: 1;

`;

const Select = styled.select`
margin-right: 10px;
padding: 10px;
`;

const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
      <Navbar>
      <Logo><Link to="/" style={{color: 'inherit',textDecoration: 'none'}}>MEOW MEOW</Link></Logo>
      </Navbar>
      <Amix>
        <Meowtitle>
          <Meow>Love yourself and become beauty. MEOW MEOW have a lots beautiful dresses wait you explore :3</Meow>
        </Meowtitle>
      </Amix>

      <FilterContainer>
        <Filter><FilterText>Filter Product</FilterText>
        <Select>
          <Option disabled selected>Color</Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>

        <Select>
          <Option disabled selected>Size</Option>
          <Option>SX</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
          <Option>2XL</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Product</FilterText>
        <Select>
          <Option selected>Newset</Option>
          <Option>Price (asc)</Option>
          <Option>Price (desc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newletter/>
      <Footer/>
    </Container>
    
  )
}

export default ProductList
