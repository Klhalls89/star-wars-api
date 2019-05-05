import React from 'react';
import './Header.scss'

const Header = (props) => {
  return(
    <div>
      <header>
        <h1>&#10023;SWAPI-BOX&#10022;</h1>
        <h3 className="Favorites">Favorites<span className="favoriteNumber">0</span></h3>
      </header>
      <main>
        <nav>
          <button onClick={props.getPeople}>People</button>
          <button onClick={() => {}}>Planets</button>
          <button onClick={() => {}}>Vehicles</button>
        </nav>
        <p>select a button</p>
      </main>
    </div>
  )
}

export default Header;