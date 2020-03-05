import React, { Component , Fragment } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'
import Mc from '../Assets/Mc.png'
import mk from '../Assets/mk.jpg'
import kfc from '../Assets/kfc.png'
import bgk from '../Assets/bgk.png'
class Cards extends React.Component {
    constrctor(props){
        // super(props)
        this.state = {
            name: ['McDonald','KFC','BurgerKing','MK'],
            img: [Mc,mk,kfc,bgk],
            place: ['Central Rama 2','Central Rama 3','Central Rama 4','Central Rama 5']
        };
    }
    render(){
        return(
            <Fragment>
                <WrapperCards>
                    <LogoCards src={Mc}/>
                    <TextContainnerCards>
                    <TextsCards>McDonald</TextsCards>
                    <TextsCards>Place : Central Rama 2</TextsCards>
                    <TextsCards>Queq : 46</TextsCards>
                    <ButtonCards>Reserve</ButtonCards>
                    </TextContainnerCards>
                </WrapperCards>
            </Fragment>
        );
    }
}

export default Cards

const WrapperCards = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: center; */
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 33%;
margin: 16px;
`;

const TextContainnerCards = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
/* justify-content: center; */

padding: 16px;
`;

const TextsCards = styled.span`
font-size: 1.2rem;
margin: 8px 0 8px 0;
`;

const ButtonCards = styled.button`
margin-top: auto;
height: 50px;
border: none;

background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
color: #FFFFFF;
font-weight: bold;
`;
const LogoCards = styled.img`
margin-right: 8px;
padding: 12px;
width: 200px;
border-radius:  25px 0 0 25px ;
background: linear-gradient(90deg, rgba(211,235,9,1) 0%, rgba(199,5,5,1) 52%, rgba(222,30,30,1) 100%);
`;