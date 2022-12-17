import React from 'react';
import Iframe from 'react-iframe'
import '../App.css';
import imgCorretor from '../medias/media-corretor/WhatsApp_Image_2022-11-24_at_16.58.26-removebg.png';

function InfoCorretor() {
  return (
    <div className='root-info-corretor'>
      <div>
        <img className='image-corretor' src={imgCorretor} alt="imagem-corretor" />
      </div>
      <div className='info-corretor'>
        <h1>Victor Hugo</h1>
        <p>Corretor de imóveis com mais de 3 anos de experiência em imóveis particulares, novos e vendidos ainda na planta. Vasto conhecimento com financiamento MCMV, agora chamado de Programa Casa Verde e Amarela</p>
        <p>Telefone para Contato: +55 (61) 99559-8115</p>
        <p>Email: victorh7.profissional@gmail.com</p>
        <p>Escritório: Centro Urbano - Quadra 301 Conjunto 08 Lote 01 – Samambaia/DF</p>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2281.8073173709213!2d-48.08873334995962!3d-15.881428573747156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd3c82cc3913f%3A0xe6e2cb7e7df4c4b9!2sReserva%20do%20Horizonte%20-%20Samambaia!5e0!3m2!1spt-BR!2sbr!4v1671315069760!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}

export default InfoCorretor