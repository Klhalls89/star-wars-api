import React, { Component } from 'react';
import './App.scss';
// import Loader from '../Loader/Loader'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movie: {},
      beings: [],
      places: [],
      vehicles: [],
      favorites: []

    }
  }

  componentDidMount(){
    this.getMovie()
  }

  getMovie = () => {
    const url = "https://swapi.co/api/films"
    fetch(url)
      .then(response => response.json())
      .then(results => this.setMovie(results.results))
      .catch(error => console.log(error))
  }

  makeRandomNumber() {
    return  Math.floor(Math.random() * (7))
  }

  setMovie = (movies) => {
    const randomMovie = this.makeRandomNumber()
    this.setState({
      movie: movies[randomMovie]
    })
  }

  render() {
    const { title, opening_crawl, release_date} = this.state.movie
    return (
      <div className="App">
        <header>
          <h1>&#10023; SWAPI BOX &#10022;</h1>
          <nav>
            <h3>Favorites<span className="favoriteNumber">0</span></h3>
            <h3>Beings</h3>
            <h3>Places</h3>
            <h3>Vehicles</h3>
          </nav>
        </header>
          <marquee 
            behavior="scroll" 
            direction="up">
            {title}....
            {opening_crawl}
            {release_date}
          </marquee>
      </div>
    );
  }
}

export default App;
