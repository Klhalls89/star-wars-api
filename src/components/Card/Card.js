import React from 'react'

const Card = (props) => {
console.log('card', props.cardInfo)
  return(
    <div>
      {props.cardInfo}
    </div>
  )
}

export default Card