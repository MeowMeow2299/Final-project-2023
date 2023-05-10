import styled from "styled-components"
// import {ShoppingCartOutlined } from '@material-ui/icons'
// import { Badge } from '@mui/material'
import {mobile} from "../responsive";
const Container = styled.div`
height: 30px;
margin-top: 10px;
background-color: pink;
${mobile({display: "none", height: "50px"})}
`;
const Wrapper = styled.div`
padding:5px 10px ;
align-items: center;
justify-content: space-between;`

const Left = styled.div`
align-items: center;
justify-content: center;`

const Language = styled.span`
font-size: 16px;
font-weight: 400;
margin: 22px;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Navside = () => {
  return (
    <Container>
      <Wrapper>
                <Left>
                    <Language>All Items</Language>
                    <Language>Sale Off</Language>
                    <Language>Dresses</Language>
                    <Language>Blouse</Language>
                    <Language>Pants</Language>
                    <Language>Skirt</Language>
                    <Language>Bikini</Language>
                    <Language>Accessories</Language>
                    <Language>Shoes</Language>
                    <Language>News Style</Language>
                    <Language>Collection</Language>
                    <Language>New In</Language>
                    <Language>Tracks</Language>
                    <Language>Feedback</Language>
                    <Language>Supports</Language>
                </Left>
            </Wrapper>
    </Container>
  )
}

export default Navside
