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
          name: ['McDonald','KFC','BurgerKing','MK'],
          place: ['Central Rama 2','Central Rama 3','Central Rama 4','Central Rama 5']
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
                    <LogoCards src={Mc}/>
                    <TextContainnerCards>
                        <TextsCards>{this.state.name[0]}</TextsCards>
                        <TextsCards>Place : {this.state.place[0]}</TextsCards>
                        <TextsCards>Queq : {Math.floor(Math.random() * 100)}</TextsCards>
                        <Link to="/queq" style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
                <WrapperCards>
                    <LogoCards src={kfc}/>
                    <TextContainnerCards>
                        <TextsCards>{this.state.name[1]}</TextsCards>
                        <TextsCards>Place : {this.state.place[1]}</TextsCards>
                        <TextsCards>Queq : {Math.floor(Math.random() * 100)}</TextsCards>
                        <Link to="/queq" style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
                <WrapperCards>
                    <LogoCards src={mk}/>
                    <TextContainnerCards>
                        <TextsCards>{this.state.name[2]}</TextsCards>
                        <TextsCards>Place : {this.state.place[2]}</TextsCards>
                        <TextsCards>Queq : {Math.floor(Math.random() * 100)}</TextsCards>
                        <Link to="/queq" style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
                    </TextContainnerCards>
                </WrapperCards>
                <WrapperCards>
                    <LogoCards src={bgk}/>
                    <TextContainnerCards>
                        <TextsCards>{this.state.name[3]}</TextsCards>
                        <TextsCards>Place : {this.state.place[3]}</TextsCards>
                        <TextsCards>Queq : {Math.floor(Math.random() * 100)}</TextsCards>
                        <Link to="/queq" style={{marginTop:'auto'}}><ButtonCards>Reserve</ButtonCards></Link>
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