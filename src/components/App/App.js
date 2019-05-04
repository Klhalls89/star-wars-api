import React, { Component } from 'react';
import './App.scss';
import { fetchThis } from '../utils/Api'
import { makeRandomNumber } from '../utils/helper'
import Header from '../pages/Header'
import Scroll from '../pages/Scroll'
import People from '../pages/People'
import Planets from '../pages/Planets'
import Vehicles from '../pages/Vehicles'
import Favorites from '../pages/Favorites'


class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "Landing",
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

  changePage = (e) => {
    let page = e.target.innerText
    if(page == "People"){
      this.getPeople()
    }
    this.setState({page})
  }

  getPeople = () => {
    return fetchThis("https://swapi.co/api/people/")
      .then(people => this.getEachSpecies(people))
      .then(people => this.getEachPlanet(people))
      .then(people => this.setPeople(people))
      .catch(error => console.log(error))
    }
 
  getEachSpecies = (people) => {
    console.log('getEachSpecies',people)
    let eachSpecies = people.results.map((person) => {
    return fetchThis(person.species)
      .then(species => ({...person, species: species.name, language: species.language}))
      .catch(error => console.log(error))
    })
    return Promise.all(eachSpecies)
  }

  getEachPlanet = (people) => {
    console.log('getEachPlanet',people)
    let eachPlanet = people.map((person) => {
    return fetchThis(person.homeworld)
      .then(homeworld => ({...person, homeworld: homeworld.name, population: homeworld.population}))
      .catch(error => console.log (error))
    })
    return Promise.all(eachPlanet)
  }

  setPeople = (people) => {
    this.setState({people})
  }

  render() {
    if(this.state.page === "Landing") {
      return(
        <div className="App">
          <Header changePage={this.changePage} />
          <Scroll {...this.state.movie} />
        </div>
      )
    }
  
    else if(this.state.page === "People") {
      return(
        <div className="App">
          <Header changePage={this.changePage} />
          <People people={this.state.people} />
        </div>
      )
    }

    else if(this.state.page === "Planets") {
      return(
        <div className="App">
          <Header changePage={this.changePage} />
          <Planets />
        </div>
      )
    }

     else if(this.state.page === "Vehicles") {
      return(
        <div className="App">
          <Header changePage={this.changePage} />
          <Vehicles />
        </div>
      )
    }

     else if(this.state.page === "Favorites") {
      return(
        <div className="App">
          <Header changePage={this.changePage} />
          <Favorites favorites={this.state.favorites} />
        </div>
      )
    }
  }
}

export default App;
