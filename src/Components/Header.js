import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <Wrapper>
          <Link to="/"><HeadText>Dinner Reserver</HeadText></Link>
      </Wrapper>
    )
}
  
export default Header

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 70px;
background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const HeadText = styled.span`
color: #FFFFFF;
font-size: 1.8rem;
font-weight: bold;
cursor: pointer;
`;