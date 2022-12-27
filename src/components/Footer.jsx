import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <hr/>
      <p>
        Reserva Parque Clube: R-14/223635 registrado no Cartório do 3º Ofício do Distrito Imobiliário Federal. Responsável Técnico: Ana Maria Montandon Chaer – CAU A44294-1 e Ismar Antônio Fernandes – CREA 18510/D. Consulte o corretor e a tabela de vendas. As imagens deste impresso são meramente ilustrativas, bem como os móveis, equipamentos, acessórios e paisagismo. Os materiais de acabamento constantes no Memorial Descritivo anexado ao Contrato de Compra e Venda prevalecem sobre estas ilustrações
        Creci PJ – Direcional Vendas – DF: 14755
      </p>
      <Link to='/privacidade' className='link'>POLITICA DE PRIVACIDADE</Link>
      <p>© 2023 Reserva Parque Clube – Águas Claras, Brasília – DF</p>
{/* Falta ajeitar a tabela da política de privacidade e terminar o footer com os links */}
    </footer>
  )
}

export default Footer