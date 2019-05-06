import React from 'react';
import './pages.scss'
import Card from '../Card/Card'

const People = (props) => {
  let allPeople = props.people.map(prop => {
     return ( 
        <div>
          <p>{prop.name}</p>
          <p>Homewold: {prop.homeworld}</p>
          <p>Species: {prop.species}</p>
          <p>Language: {prop.language}</p>
          <p>Population: {prop.population}</p>
       </div> 
     )
  })
  return (
    <div className="cardDiv">
      <Card cardInfo={allPeople}/>  
    </div>
  )

}
export default People