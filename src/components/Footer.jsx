import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
margin: 20px 0px;
text-align: justify;


`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;

`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
justify-content: space-between;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
align-items: center;
justify-content: space-between;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width: 100%;
margin-bottom: 20px;
cursor: pointer;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MEO MEOW</Logo>
                <Desc>
                    MEOW MEOW is a global fashion and lifestyle electronics retailer committed to making the beauty of fashion 
                    accessible to all. We use made-on-demand technology to connect suppliers to our flexible supply chain, 
                    reducing inventory waste and enabling us to offer a wide range of affordable products to customers around 
                    the world. From our global offices, we reach customers in more than 150 countries.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>New Style</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Policy</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                    123 Tran Nao, Districts 1, Ho Chi Minh City, VietNam 716500
                </ContactItem>

                <ContactItem>
                <Phone style={{marginRight: "10px"}}/>
                    123 456 7891
                </ContactItem>

                <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/>
                   support@meowmeow.com
                </ContactItem>

                <Payment src="./images/9.png"/>
            </Right>
        </Container>
    )
}

export default Footer
