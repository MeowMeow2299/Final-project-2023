import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { allitem } from '../data';

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "30vh" })}`

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`

const Title = styled.h1`
color: white;
margin-bottom: 20px;`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;`

const AllItems = (item, item1) => {
    return (
        <div>
            <Container>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>ALL ITEMS</Button>
                </Info>
            </Container>

            <Container>
                <Image src={item1.img1} />
                <Info>
                    <Title>{item1.title1}</Title>
                    <Button>ALL ITEMS</Button>
                </Info>
            </Container>
        </div>
    )
}

export default AllItems
