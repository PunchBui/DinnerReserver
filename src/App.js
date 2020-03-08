import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import Queqed from './Components/Queqed.js'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput : "",
      name: ['McDonald','KFC','BurgerKing','MK'],
      place: ['Central Rama 2','Central Rama 3','Central Rama 4','Central Rama 5']
    };
}
  render() {
    const info = {
      name: ['McDonald','KFC','BurgerKing','MK'],
      place: ['Central Rama 2','Central Rama 3','Central Rama 4','Central Rama 5']
    };
    return (
      <div className="App container">
        <Header/>
        <Route exact path="/" component={Main}/>
        <Route path="/queq" component={Queqed}/>
        <Footer/>
      </div>
    )
  }
}

export default App