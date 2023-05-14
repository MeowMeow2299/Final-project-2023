import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: bold 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>
props.type === "filled" ? "pink" : "transparent"};
color: ${props=>props.type === "filled" && "black"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const ProductDetail = styled.div`
flex: 2;
display:flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
border: 1px solid pink;
background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.span`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const  ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const  ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const  ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid pink;
border-radius: 10px;
padding: 20px;
height: 50hv;
`;

const SummaryTitle = styled.h1`
font-weight: solid 200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button= styled.button`
width: 100%;
padding: 10px;
background-color: pink;
color: black;
font-weight: 600;
cursor: pointer;
`;
const Hr = styled.hr`
background-color: #ffebef;
border: none;
height: 1px;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
            <Link to="/" className="link"><TopButton>CONTINUE SHOPPING</TopButton></Link>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="./images/Product 222.png"/>
                    <Details>
                      <ProductName><b>Product:</b> Asymmetrical Bears Dress Knotted Small Ruffled Cartoons All on in Boho</ProductName>
                      <ProductId><b>ID:</b> sw2212087489100777</ProductId>
                      <ProductColor color="white">
                      {/* <b>Color:</b> */}
                      </ProductColor>
                      <ProductSize><b>Size:</b> S</ProductSize>
                    </Details>
                  </ProductDetail>

                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>
                  <Hr/>
                <Product>
                  <ProductDetail>
                    <Image src="./images/Product 333.png"/>
                    <Details>
                      <ProductName><b>Product:</b> Women's Bikini Tied Up Snakeskin Print Sexy</ProductName>
                      <ProductId><b>ID:</b>  sw2302224866361004</ProductId>
                      <ProductColor color="brown">
                      {/* <b>Color:</b> */}
                      </ProductColor>
                      <ProductSize><b>Size:</b> XS</ProductSize>
                    </Details>
                  </ProductDetail>

                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                    <ProductAmount>1</ProductAmount>
                    <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 9</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 69</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ 69</SummaryItemPrice>
                </SummaryItem>

                <Link to="/payment" className="link"><Button>CHECKOUT NOW</Button></Link>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
