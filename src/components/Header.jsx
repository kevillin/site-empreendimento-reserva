import { React } from 'react';
import '../App.css';
import NavBar from './NavBar';
import portariaReserva from '../medias/media-empreendimento/portaria_email.jpg';
import WhatsApp from './WhatsApp';
import FormularioCadastro from './FormularioCadastro';
import InfoCorretor from './InfoCorretor';


const Header = () => {
  return (
    <div className='Header'>
      <header>
        <div className='app-header'>
          <p>Espaço-Logo-img</p>
          <NavBar />
        </div>
        <div className='main'>
          <img className='image-header' src={portariaReserva} alt="portaria-empreendimento" />
          <div className='slogan-main'>
            <h1>Reserva Parque Clube</h1>
            <h3>Compre o seu apartamento em um dos melhores empreendimentos de Brasília</h3>
          </div>
        </div>
        <WhatsApp />
        <FormularioCadastro />
        <InfoCorretor />
      </header>
    </div>
  );
}

export default Header;