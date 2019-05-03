import React, { Component } from 'react';
import './App.scss';
import { fetchThis } from '../utils/Api'
import { makeRandomNumber } from '../utils/helper'
import Header from '../pages/Header'
import Scroll from '../pages/Scroll'


class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "landing",
      movie: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: []

    }
  }

  componentDidMount(){
    fetchThis("https://swapi.co/api/films")
    .then(results => this.setMovie(results.results))
  }

  setMovie = (movies) => {
    const randomMovie = makeRandomNumber()
    this.setState({
      movie: movies[randomMovie]
    })
  }



  render() {
    if(this.state.page === "landing"){
      return(
        <div className="App">
          <Header />
          <Scroll {...this.state.movie} />
        </div>
      )
    }

  }
}

export default App;
