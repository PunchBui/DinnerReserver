import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'

const Queqed = (props) => {
    return(
        <Wrapper>
            <WrapperCards>
                <HeaderText>YOU ARE IN QUEQ!</HeaderText>
            </WrapperCards>
            {/* <HeaderText>YOU ARE IN QUEQ!</HeaderText> */}
        </Wrapper>
    );
}

export default Queqed

const Wrapper = styled.div`
display: flex;
align-items: center; 
justify-content: center;
width: 100%;
height: 100vh;
`;

const HeaderText = styled.span`
font-weight: bold;
font-size: 3rem;
color: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
@media (max-width: 768px) {
    font-size: 1.8rem;
}
`;

const WrapperCards = styled.div`
/* align-items: center; */
/* justify-content: center; */
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 30px;
margin: 16px;
color: #FFFFFF;
background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
`;