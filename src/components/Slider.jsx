import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
${'' /* background-color: pink; */}
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
${'' /* background-color: #fff7f7; */}
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 90%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);`

const Slide = styled.div`
width: 100vw;
height:100vh;
display: flex;
align-items: center;
${'' /* background-color: #${props => props.bg}`; */}`

const ImgContainer = styled.div`
height: 90%;
flex:1;
`;
const Image = styled.img`
height: 85%;
cursor: pointer;
`
const InfoContainer = styled.div` 
padding: 50px;
flex:1;
`;


const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Link to="/productlist" className="link" style={{ color: 'inherit', textDecoration: 'none' }}><Button>SHOW NOW</Button></Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
