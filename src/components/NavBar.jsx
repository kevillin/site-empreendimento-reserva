import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div className='border-nav'>
      <nav className='navbar'>
        <Link to='/visitas' className='link'>AGENDE UMA VISITA</Link>
        <Link to='/financiamento' className='link'>FINANCIAMENTO</Link>
        <Link to='/documentacao' className='link'>DOCUMENTAÇÃO NECESSÁRIA</Link>
        <Link to='/construtora' className='link'>CONHEÇA A CONSTRUTORA</Link>
      </nav>
    </div>
  )
}

export default NavBar;