import React from 'react';
import './Header.scss'

const Header = () => {
  return(
    <div>
      <header>
        <h1>&#10023;SWAPI-BOX&#10022;</h1>
        <h3>Favorites<span className="favoriteNumber">0</span></h3>
      </header>
      <main>
        <nav>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </nav>
        <p>select a button</p>
      </main>
    </div>
  )
}

export default Header;