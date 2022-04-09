import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  
  const clearStroge = () => {
    localStorage.clear()
    window.location.reload()
  } 

  return (
    <nav className='navbar'>
      <h1>AD PUB</h1>

      <span className='download__btn danger' onClick={clearStroge}>Supprimer tous les informations</span>
      <ul >
      </ul>
    </nav>
  )
}

export default Nav