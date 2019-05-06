import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Api from '../utils/Api'

describe('App', () => {
  let results = {results:[]}
  let wrapper
  let mockFetchThis
  let setMovie = jest.fn()
  let movie = {opening_crawl:"along time ago", 
                title:"A New Hope", 
                release_date:1977}

  let movies = [{opening_crawl:"along time ago", 
                title:"A New Hope", 
                release_date:1977},
                {opening_crawl:"It is a dark time", 
                title:"The Empire Strikes Back", 
                release_date:1980}]
 
  beforeEach(() => {
    mockFetchThis = jest.spyOn(Api,'fetchThis')
    wrapper = shallow(<App />,{disableLifecycleMethods: true})
  }) 

 
  describe('componentDidMount', () => {

    it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

    it('should call fetchThis with correct params', async () => {
     await wrapper.instance().componentDidMount()
     expect(mockFetchThis).toHaveBeenCalledWith("https://swapi.co/api/films")
    })

    it('should call setMovies with results', async () => {
      await wrapper.instance().componentDidMount()
      expect(setMovie).toHaveBeenCalledWith(results.results)
    })
  })


  describe('setMovie', () => {

    it('state is reset with correct properties', () => {
      wrapper.instance.setMovie(movies)
     expect(wrapper.instance.state.movie).toEqual(movie)
    })

  })


  describe('getPeople', () => {

    it.skip('should reset state', () => {

    })

    it.skip('should call fetchThis with the correct params', () => {

    })

    it.skip('should call getEachSpecies', () => {

    })

    it.skip('should call EachPlanet', () => {

    })

    it.skip('should call setPeople', () => {

    })

    it.skip('should console log an error if response not ok', () => {

    })
  })


  describe('getEachSpecies', () => {

    it.skip('should call fetchThis with correct pramams', () => {

    })

    it.skip('should console an error if response not ok', () => {

    })

  })

   describe('getEachPlanet', () => {

    it.skip('should call fetchThis with correct pramams', () => {

    })

    it.skip('should console an error if response not ok', () => {

    })

  })

     describe('setPeople', () => {

    it.skip('should retset state', () => {

    })

  })

})
