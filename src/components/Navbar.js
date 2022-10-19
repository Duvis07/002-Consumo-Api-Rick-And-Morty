import React from 'react'

export const Navbar = ({brand}) => {
  return (
    <nav className="navbar nabvar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand text-uppercase text-primary" href="{brand}">
        Rick And Morty App
      </a>
    </div>
  </nav>
  )
}

export default Navbar
