import React from 'react';
import Card from '../Card/Card'

const People = (props) => {
  let peopleInfo = props.people.map((prop) => {
    return(
      'hello'
    )
  })
 
  
  return (
    <div>
      {peopleInfo}      
    </div>
  )
}

export default People