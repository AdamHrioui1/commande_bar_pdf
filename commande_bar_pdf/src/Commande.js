import React, { useState, useEffect } from 'react'
import html2pdf from 'html2pdf.js'
import './Facture.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

const Commande = () => {

  const [table, setTable] = useState([])
  const [total, setTotal] = useState(0)

  var info = localStorage.getItem('infos') !== null ? JSON.parse(localStorage.getItem('infos')) : []
  var client_info = localStorage.getItem('client info') !== null ? JSON.parse(localStorage.getItem('client info')) : []
  var last_info = localStorage.getItem('last info') !== null ? JSON.parse(localStorage.getItem('last info')) : []
  
  useEffect(() => {
    setTable(info)
    info = localStorage.getItem('infos') !== null ? JSON.parse(localStorage.getItem('infos')) : []

    var T = 0
    info.map(t => {
        T += t.PTHT
    })
    setTotal(T)
  }, [])

  useEffect(() => {
    console.log(total)

    var T = 0
    info.map(t => {
        T += t.PTHT
    })
    setTotal(T)
  })
  
  const pdfDownload = e => {
    e.preventDefault()

    var element = document.getElementById('commande_pdf')

    var opt = {
      margin: 0,
      filename: 'commande.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'}
    }

    html2pdf().set(opt).from(element).save()
  }
  
  const clearStroge = () => {
    localStorage.clear()
  } 

  return (
    <div className='big__container'>

      <div className='pdf__papper' id="commande_pdf">
        <div>  
          <header>
            <h3>SARL ZAZI L'AGENCE DE COMMUNICATION A.U</h3>
            <p>Villa 17 Quantier des sunes - BP 1620 - 44000 ESSAOUIRA</p>
            <p>05 24 47 45 80 - 06 74 92 87 83 - 06 62 39 44 68</p>
          </header>

          <div className='general__infos__container'>
            <div className='left__info'>
              <div className='img__container'>
                <div className='img__container__logo'>
                  <img src={logo} alt='adpub logo'/>
                </div>            
                <h2>Sarl ZAZI</h2>
              </div>

              <div className='left__info__footer'>
                <h2 style={{textDecoration: 'underline'}} >COMMANDE N° {last_info.commandeNum}{last_info.date.slice(0, 4)}{last_info.date.slice(5, 7)}{last_info.date.slice(8, 10)}</h2>
              </div>
            </div>

            <div className='right__info'>
              <h2>{client_info.company}</h2>
              <p style={{marginBottom: '30px'}}>{client_info.city}</p>
              <p>{client_info.city} le {last_info.formatDate}</p>
            </div>
          </div>

          <div className='table__container'>
            <table>
              <tbody>
                  <tr>
                      <th>Designation</th>
                      <th>Unity</th>
                      <th>Quantity</th>
                      <th>PU HT (dh)</th>    
                      <th>PT HT (dh)</th>
                  </tr>
                  {
                      table.map(t => {
                          return (
                              <tr key={t.id}>
                                  <td>{t.designation}</td>
                                  <td>{t.unity}</td>
                                  <td>{t.quantity}</td>
                                  <td>{t.PUHT}</td>
                                  <td>{t.quantity * t.PUHT}</td>
                              </tr>
                          )
                      })
                  }

                  <tr>
                      <td colSpan="2" rowSpan='3'></td>
                      <td colSpan="2"><strong>Total HT</strong></td>
                      <td>{total}</td>
                  </tr>
              </tbody>
            </table>

          </div>
        </div>

        <footer>
          <p>Règlement au NOM de : SARL ZAZI L'AGENCE   DE COMMUNICATION   A.U</p>
          <p>Cpte. Bancaire : 021 240 000031503 0016831 89</p>
          <p>RC 1991 - IF 0790834 - PTE 47551264 - ICE 001577564000024</p>
        </footer>
      </div>

      <div className='download__btn__container'>
        <button className='download__btn' onClick={pdfDownload}>Télécharger la commande PDF</button>
      </div>

      <div className='border'></div>
       
      <div className='download__btn__container'>
        <Link to='/' className='download__btn danger' onClick={clearStroge}>Supprimer tous les informations</Link>
      </div>
    </div>
  );
}

export default Commande