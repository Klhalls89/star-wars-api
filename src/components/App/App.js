import React, { Component } from 'react';
import './App.scss';
import Api from '../utils/Api'
import { makeRandomNumber } from '../utils/helper'
import Header from '../pages/Header'
import Scroll from '../pages/Scroll'
import People from '../pages/People'
import Planets from '../pages/Planets'
import Vehicles from '../pages/Vehicles'
import Favorites from '../pages/Favorites'
import Loader from '../Loader/Loader'


class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "Landing",
      movie: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      loader: true
    }
  }

  componentDidMount(){
    Api.fetchThis("https://swapi.co/api/films")
    .then(results => this.setMovie(results.results))
  }

  setMovie = (movies) => {
    const randomMovie = makeRandomNumber()
    this.setState({
      movie: movies[randomMovie],
      loader: false
    })
  }

  getPeople = () => {
    this.setState({
      loader: true
    })
    return Api.fetchThis("https://swapi.co/api/people/")
      .then(people => this.getEachSpecies(people))
      .then(people => this.getEachPlanet(people))
      .then(people => this.setPeople(people))
      .catch(error => console.log(error))
    }
 
  getEachSpecies = (people) => {
    let eachSpecies = people.results.map((person) => {
    return Api.fetchThis(person.species)
      .then(species => ({...person, species: species.name, language: species.language}))
      .catch(error => console.log(error))
    })
    return Promise.all(eachSpecies)
  }

  getEachPlanet = (people) => {
    let eachPlanet = people.map((person) => {
    return Api.fetchThis(person.homeworld)
      .then(homeworld => ({...person, homeworld: homeworld.name, population: homeworld.population}))
      .catch(error => console.log (error))
    })
    return Promise.all(eachPlanet)
  }

  setPeople = (people) => {
    this.setState({people,
      loader:false,
      page: "People"
    })

  }

  render() {
    let currentPage = <Scroll {...this.state.movie} />
    switch (this.state.page) {
  
      case "People":
        currentPage = <People people={this.state.people} />
        
        break      
      
      case "Planets": 
        currentPage = <Planets />

        break
       
      case "Vehicles":
        currentPage = <Vehicles />

        break
        
      case "Favorites":
        currentPage = <Favorites favorites={this.state.favorites} />
       
        break
      
      default: 

    }

    return ( 
      <div className="App">
        <Header getPeople={this.getPeople} />
        {this.state.loader && <Loader />}
        {currentPage}
      </div>
    )
  }
}

export default App;
