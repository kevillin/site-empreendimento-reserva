import React from 'react'

function FormularioCadastro() {
  return (
    <form method='POST' action='https://formsubmit.co/victorh7.profissional@gmail.com'>
      <h1>CONTATO</h1>
      <input type='text' name='name' placeholder='Digite seu nome completo' required/>
      <input type='email' name='email' placeholder='Digite seu email' required/>
      <input type='tel' name='tel' placeholder='Digite seu número de telefone' required />
      <textarea name='observacoes' placeholder='Aonde você tem interesse de morar?'/>
      
      <button type="submit">ENVIAR</button>

      <input type='hidden' name='_subject' value='Novo Contato!' />
      <input type='hidden' name='_honey' style={ {display: 'none'} } />
      <input type='hidden' name='_captcha' value={false} />
    </form>
  )
}

export default FormularioCadastro