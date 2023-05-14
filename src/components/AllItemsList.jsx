import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { allitem } from '../data';
import AllItems from './AllItems';

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;`

const AllItemsList = (item, item1) => {
  return (
    <div>
      <Container>
      {
        allitem.map(item => (
          <AllItems item ={item} key={item.id}/>
        ))};
    </Container>

    <Container>
      {
        allitem.map(item1 => (
          <AllItems item1 ={item1} key={item1.id1}/>
        ))};
    </Container>
    </div>
     )
}

export default AllItemsList
