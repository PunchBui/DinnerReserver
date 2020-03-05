import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
      <Wrapper>
          <Link to="/"><HeadText>Dinner Reserver</HeadText></Link>
      </Wrapper>
    )
}
  
export default Footer

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 200px;
margin-top: auto;
background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
`;

const HeadText = styled.span`
color: #FFFFFF;
font-size: 2rem;
font-weight: bold;
cursor: pointer;
`;