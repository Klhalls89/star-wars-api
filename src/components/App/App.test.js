import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Api from '../utils/Api'

describe('App', () => {
  let mockResults = {results:[]}
  let wrapper
  let mockFetchThis
  beforeEach(() => {
    mockFetchThis = jest.spyOn(Api,'fetchThis')
    wrapper = shallow(<App />,{disableLifecycleMethods: true})
  }) 
 
  describe('componentDidMount', () => {

    it('should call fetchThis with correct params', async () => {
     await wrapper.instance().componentDidMount()
     expect(mockFetchThis).toHaveBeenCalledWith("https://swapi.co/api/films")
    })

    it('should call setMovies with results', () => {
      let setMovie = jest.fn()
      expect(setMovie).toHaveBeenCalledWith(mockResults.results)
    })
  })
})
