import React from 'react'

function WhatsApp() {

  const redirectToWhatsApp = () => {
    const linkToWhatsApp = "https://api.whatsapp.com/send?phone=556195598115";

    window.open(linkToWhatsApp, "_blank");
  };

  return (
    <div>
      <h1>Fale com o corretor e agende sua visita</h1>
      <button className="btn btn-success" onClick={ redirectToWhatsApp }>
        Fale comigo!
      </button>
    </div>
  )
}

export default WhatsApp