import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'
import bgSearch from '../Assets/1.png'
import Cards from './cards.js'
import Queded from './Queqed.js'
import Mc from '../Assets/Mc.png'
import mk from '../Assets/mk.jpg'
import kfc from '../Assets/kfc.png'
import bgk from '../Assets/bgk.png'
import { Link } from 'react-router-dom'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          searchInput : "",
        //   name: ['McDonald','KFC','BurgerKing','MK'],
        //   place: ['Central Rama 2','Central Rama 3','Central Rama 4','Central Rama 5'],
        //   currQ: Math.floor(Math.random() * 100)
        };
    }
    // sendProps = () => {
    //     this.setState({
    //         parentValue : "success"
    //     });
    // }
    setSearch = (e) => {
        this.setState({
            searchInput : e
        });
    }
    render() {
        const dinningPlace = {
            McDonald: {
                name: 'McDonald',
                place: 'Central Rama 2',
                img: Mc,
                currQ: Math.floor(Math.random() * 100)
            },
            KFC: {
                name: 'KFC',
                place: 'Central Rama 3',
                img: kfc,
                currQ: Math.floor(Math.random() * 100)
            },
            BurgerKing: {
                name: 'BurgerKing',
                place: 'Central Rama 4',
                img: bgk,
                currQ: Math.floor(Math.random() * 100)
            },
            MK: {
                name: 'MK',
                place: 'Central Rama 5',
                img: mk,
                currQ: Math.floor(Math.random() * 100)
            }
        }
        return (
        <Wrapper>
            <SearchBg src={bgSearch}/>
            <SearchContainner>
                <Search placeholder="Find Dinner Place."
                        value={this.state.searchInput}
                        onChange={(e) => this.setSearch(e.target.value)}/>
                <SearchBtn>SEARCH</SearchBtn>
            </SearchContainner>
            <CardCon>
                <WrapperCards>
                    <LogoCards src={dinningPlace.McDonald.img}/>
                    <TextContainnerCards>
                        <TextsCards>{dinningPlace.McDonald.name}</TextsCards>
                        <TextsCards>Place : {dinningPlace.McDonald.place}</TextsCards>
                        <TextsCards>Queq : {dinningPlace.McDonald.currQ}</TextsCards>
                        <Link to={{pathname:'/queq',state:{din : dinningPlace.McDonald} }} style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
                <WrapperCards>
                    <LogoCards src={dinningPlace.KFC.img}/>
                    <TextContainnerCards>
                        <TextsCards>{dinningPlace.KFC.name}</TextsCards>
                        <TextsCards>Place : {dinningPlace.KFC.place}</TextsCards>
                        <TextsCards>Queq : {dinningPlace.KFC.currQ}</TextsCards>
                        <Link to={{pathname:'/queq',state:{din : dinningPlace.KFC} }} style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
                <WrapperCards>
                    <LogoCards src={dinningPlace.MK.img}/>
                    <TextContainnerCards>
                        <TextsCards>{dinningPlace.MK.name}</TextsCards>
                        <TextsCards>Place : {dinningPlace.MK.place}</TextsCards>
                        <TextsCards>Queq : {dinningPlace.MK.currQ}</TextsCards>
                        <Link to={{pathname:'/queq',state:{din : dinningPlace.MK} }} style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
                <WrapperCards>
                    <LogoCards src={dinningPlace.BurgerKing.img}/>
                    <TextContainnerCards>
                        <TextsCards>{dinningPlace.BurgerKing.name}</TextsCards>
                        <TextsCards>Place : {dinningPlace.BurgerKing.place}</TextsCards>
                        <TextsCards>Queq : {dinningPlace.BurgerKing.currQ}</TextsCards>
                        <Link to={{pathname:'/queq',state:{din : dinningPlace.BurgerKing} }} style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
            </CardCon>
        </Wrapper>
        )
    }
}
  
export default Main

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

const SearchContainner = styled(FlexboxCenter)`
height: 300px;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media (max-width: 768px) {
    flex-direction: column;
}
`;

const SearchBg = styled.img`
opacity: 0.75;
position: absolute;
height: 300px;
width: 100%;
object-fit: cover;
z-index: -1;
`;

const Search = styled.input`
width: 70%;
height: 30px;
border: none;
  text-indent: 10px;
::placeholder {
  text-indent: 10px;
}
`;

const SearchBtn = styled.button`
width: 10%;
height: 33px;
border: none;
background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
color: #FFFFFF;
font-weight: bold;
cursor:pointer;
@media (max-width: 768px) {
    width: 70%;
}
`;

const CardCon = styled(FlexboxCenter)`
margin: 36px 0 36px 0;
width: 100%;
flex-wrap: wrap;
@media (max-width: 768px) {
margin: 8px 0 8px 0;
}
`;

/////

const WrapperCards = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: center; */
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 33%;
margin: 16px;
@media (max-width: 768px) {
    width: 80%;
    flex-direction:column;
}
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
@media (max-width: 768px) {
margin: 2px 0 2px 0;
}
`;

const ButtonCards = styled.button`
margin-top: auto;
height: 50px;
border: none;
background: linear-gradient(90deg, rgba(184,52,4,1) 0%, rgba(200,16,16,1) 27%, rgba(255,0,39,1) 100%);
color: #FFFFFF;
font-weight: bold;
width: 100%;
cursor:pointer;
@media (max-width: 768px) {
margin-top: 8px;
}
`;

const LogoCards = styled.img`
margin-right: 8px;
object-fit: contain;
padding: 12px;
min-width: 100px;
border-radius:  25px 0 0 25px ;
background: linear-gradient(90deg, rgba(211,235,9,1) 0%, rgba(199,5,5,1) 52%, rgba(222,30,30,1) 100%);
@media (max-width: 768px) {
border-radius: 25px 25px 0 0;
margin-right: 0px;
}
`;