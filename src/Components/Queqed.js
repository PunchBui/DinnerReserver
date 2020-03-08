import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'

const Queqed = (props) => {
    let [queq,setQueq] = useState(props.location.state.din.currQ);
    let [queqText,setQueqText] = useState('YOU ARE IN QUE!');
    let [alrText,setAlrText] = useState();
    const info = props.location.state.din;
    // console.log(queq);
    // console.log(info);
    const reduceQ = () => {
        if(queq == 0){
            clearInterval(reducingQ);
            setQueqText(queqText = "YOUR QUQ IS NOW!");
            setAlrText(alrText = 'Please check-in in 10 minutes.');
        }else{
            setQueq(queq = queq-1);
        }
    }
    const reducingQ = setInterval(reduceQ,500);
    return(
        <Wrapper>
            <WrapperCards>
                <HeaderText>{queqText}</HeaderText>
                <CardText>Name : {info.name}</CardText>
                <CardText>Place : {info.place}</CardText>
                <CardText>Queq : {queq}</CardText>
                <CardText>{alrText}</CardText>
            </WrapperCards>
            {/* <HeaderText>YOU ARE IN QUEQ!</HeaderText> */}
        </Wrapper>
    );
}

export default Queqed

const Wrapper = styled.div`
display: flex;
flex-direction: column;
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

const CardText = styled.span`
/* font-weight: bold; */
font-size: 1.5rem;
color: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
@media (max-width: 768px) {
    font-size: 1.8rem;
}
`;

const WrapperCards = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 30px;
margin: 16px;
color: #FFFFFF;
background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
`;