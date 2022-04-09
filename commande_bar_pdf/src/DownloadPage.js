import React from 'react'
import Commande from './Commande'
import Devis from './Devis'
import Facture from './Facture'
import './Facture.css'

function DownloadPage() {
  var client_info = localStorage.getItem('client info')
  var infos = localStorage.getItem('infos')
  var last_info = localStorage.getItem('last info')
  return (
      (client_info && infos && last_info) ? 
      <>
        <Facture />
        <div className='border'></div>
        <Devis />
        <div className='border'></div>
        <Commande />
      </>
      // <h1>wooow</h1>
      :
      <h1>No file to Download, Please fill all the forms!!</h1>
  )
}

export default DownloadPage