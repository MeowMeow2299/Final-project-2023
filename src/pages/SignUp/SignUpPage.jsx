import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import {
  Link,
} from "react-router-dom";
import Navbar from '../../components/Navbar';

const Container = styled.div`
color: #880e4f;`;

const Section = styled.div`
  background-image: url("./images/background 3.png");
  background-size: cover;
  opacity: 0.9;
  height: 100vh;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

const Form = styled.div`
  max-width: 320px;
  width: 100vw;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
flex: 1;
  border: 1px solid #e9ecef;
  padding: .9em 1em;
  outline: none;
  margin-bottom: 10px;
`;

const H2 = styled.h2`
font-size: 40px;
font-weight: 600;
`;

const Span = styled.span`
color:black;
`;

const Button = styled.button`
background-color: pink;
flex: 1;
color: #880e4f;
font-weight: 400;
font-size: 1em;
cursor: pointer;
border: none;
margin-top: 5px;
padding: 10px;
border-radius: 50px;
`;

export default function SignUpPage() {

const{register, handleSubmit, watch, formState:{errors}} = useForm()
const onSubmit = data=>console.log(data);
console.log(watch('username', 'email','password'))
    return (
      <div>
      <Navbar/>
        <Section >
            <Container className="register">
                    <H2>Register</H2>
                    <Span>register and enjoy your shopping at MEOW MEOW now :3</Span>

                    <Form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" {...register("username")} placeholder="Username" />
                        <Input type="text" {...register("email", {require: true})} placeholder="Email" />
                        {errors.email?.type==="require"&&"Email is require"}
                        <Input type="text" {...register("password")} placeholder="Password" />
                        <Input type="text" {...register("confirm-password")} placeholder="Confirm password" />

                        <Link to="/signin" className="link" style={{color: 'inherit',textDecoration: 'none'}}><Button className="btn">Register</Button></Link>

                    </Form>
            </Container>
        </Section>
        </div>
    )
}
