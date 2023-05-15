import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import SignUpPage from '../pages/SignUp/SignUpPage';
import Navside from './Navside';



const Container = styled.div`
height:36px;
${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding: 10px 15px ;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
border: 0.5px solid ligtgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`

const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
font-weight: bold;
font-size: 45px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Center = styled.div`
flex: 1;
text-align:center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

// Link.styled`
// text-decoration: none;
// color: inherit;
// `

const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
text-decoration: none;
color: inherit;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>VI</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    {/* <Language>Support</Language> */}
                </Left>
                <Center><Logo>MEOW MEOW</Logo></Center>
                <Right>
                    <Link to="/" className="link" style={{ color: 'inherit', textDecoration: 'none' }}><MenuItem>Home</MenuItem></Link>
                    <Link to="/productlist" className="link" style={{ color: 'inherit', textDecoration: 'none' }}><MenuItem>Products</MenuItem></Link>
                    <MenuItem>About Us</MenuItem>
                    <Link to="/signup" className="link" style={{ color: 'inherit', textDecoration: 'none' }}><MenuItem>REGISTER</MenuItem></Link>
                    <Link to="/signin" className="link" style={{ color: 'inherit', textDecoration: 'none' }}><MenuItem>SIGN IN</MenuItem></Link>

                    <MenuItem>
                        <Badge badgeContent={4} color="error">
                            <Link to="/cart" className="link" style={{ color: 'inherit', textDecoration: 'none' }}><ShoppingCartOutlined color="action" /></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )

}

export default Navbar
