import styled from "styled-components"
// import {ShoppingCartOutlined } from '@material-ui/icons'
// import { Badge } from '@mui/material'
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
height: 30px;
margin-top: 10px;
background-color: white;
${mobile({display: "none", height: "50px"})}
`;
const Wrapper = styled.div`
padding:5px 10px ;
align-items: center;
justify-content: space-between;`

const Left = styled.div`
align-items: center;
justify-content: center;
margin: 0 510px 0;`

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
                    
                <Link to="/category" className="link" style={{color: 'inherit',textDecoration: 'none'}}><Language>Categories</Language></Link>
                    <Link to="/productlist" className="link" style={{color: 'inherit',textDecoration: 'none'}}><Language>Product List</Language></Link>
                    <Language>Support</Language>
                    <Language>About Us</Language>
                </Left>

                
            </Wrapper>
    </Container>
  )
}

export default Navside
