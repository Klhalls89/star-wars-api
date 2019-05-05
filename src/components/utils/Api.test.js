import React from 'react';
import ReactDOM from 'react-dom';
import { getMovies } from './Api'

describe ('getMovies', () => {

  let mockFilms = [{title: 'A new Hope'}, {title: 'Revenge of the sith'}]

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilms),
    }))

  it.skip('should call fetch with the correct params', () => {
    const expected = 'https://swapi.co/api/films'
    getMovies()
    expect(window.fetch).toHaveBeenCalledWith(expected)

  })

  it.skip('should return a films if status ok', async () => {
    const result = await getMovies()
    expect(result).toEqual(mockFilms)

  })

  it.skip('throws an error if status code is not ok', () => {
      const mockUrl = "www.mock.com"
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: false,
        status: 404
      })
      
    });
    const expected = Error('Error getting films')
    expect(getMovies(mockUrl)).rejects.toEqual(expected)
  })
})

  

