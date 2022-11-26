import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <h2>Reserva Parque Clube</h2>
      <div>
        <Link to='/visitas'>AGENDE UMA VISITA</Link>
        <Link to='/financiamento'>FINANCIAMENTO</Link>
        <Link to='/documentacao'>DOCUMENTAÇÃO NECESSÁRIA</Link>
        <Link to='/construtora'>CONHEÇA A CONSTRUTORA</Link>
      </div>
    </div>
  )
}

export default NavBar;