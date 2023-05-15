import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: pink;
color: black;
display: flex;
align-items: center;
justify-content: center;
fontSize: 14px;
font-weight: 500;
margin-top:30px;
`

const Announcement = () => {
  return (
    <Container>
    Meow Meow Super Deal! Free Shipping on Orders Over $5     
    </Container>
  )
}

export default Announcement
