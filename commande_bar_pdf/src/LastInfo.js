import React, { useState, useEffect } from 'react'
import './ClientInfo.css'
import { Link } from 'react-router-dom'

function LastInfo() {

  const [commandeNum, setCommandeNum] = useState()
  const [devis, setDevis] = useState()
  const [factureNumber, setFactureNumber] = useState()
  const [date, setDate] = useState()
  const [formatDate, setFormatDate] = useState('')
  const [ice, setIce] = useState()
  const [refs, setRefs] = useState()
  const [nbc, setNbc] = useState()
  const [firstText, setFirstText] = useState('La présente facture est arrête à la somme de...')
  const [secondText, setSecondText] = useState('Devis valable 24h du fait des derniers événements géopolitique qui ont contribué à aggraver la situationde l\'approvisionnement en matières premières,')
//   const [thirdText, setThirdText] = useState('This is your second text here...')

    const formate__date = (date) => {
        let m = parseInt(date.slice(5, 7))
        let month = ''
        console.log(m)
        switch (m) {
            case 1:
                month = 'janvier'
                break;

            case 2:
                month = 'février'
                break;

            case 3:
                month = 'mars'
                break;

            case 4:
                month = 'avril'
                break;
        
            case 5:
                month = 'may'
                break;
    
            case 6:
                month = 'juin'
                break;

            case 7:
                month = 'juillet'
                break;

            case 8:
                month = 'aout'
                break;

            case 9:
                month = 'septembre'
                break;

            case 10:
                month = 'octobre'
                break;
                                                                            
            case 11:
                month = 'novembre'
                break;
                        
            case 12:
                month = 'decembre'
                break;
        
            default:
                month = 'none'
                break;
        }

        var f = `${date.slice(8, 10)} ${month} ${date.slice(0, 4)}`

        return f
    }

    const handleFinish = () => {

        formate__date(date)

        const last__info = {
            commandeNum: commandeNum,
            devis: devis, 
            factureNumber: factureNumber, 
            date: date,
            formatDate: formate__date(date),
            refs: refs,
            ice: randomICE(),
            nbc: nbc,
            firstText: firstText,
            secondText: secondText,
            // thirdText: thirdText,
        }

        localStorage.setItem('last info', JSON.stringify(last__info))
    }

    const clearStroge = () => {
        localStorage.clear()
    }

    const randomICE = () => {
        var randIce = []
        var randomIceString = ''
        for (let i = 0; i < 15; i++) {
            var r = Math.floor(Math.random() * 10)
            randIce.push(r)
            randomIceString += String(r)
        }
        return randomIceString
    }

    var b = JSON.parse(localStorage.getItem('last info'))
    console.log(b)

    useEffect(() => {
        if(b) {
            setCommandeNum(b.commandeNum ? b.commandeNum : commandeNum)
            setDevis(b.devis ? b.devis : devis)
            setFactureNumber(b.factureNumber ? b.factureNumber : factureNumber)
            setDate(b.date ? b.date : date)
            setFormatDate(b.formatDate ? b.formatDate : formatDate)
            setIce(b.ice ? b.ice : ice)
            setRefs(b.refs ? b.refs : refs)
            setRefs(b.refs ? b.refs : refs)
            setNbc(b.nbc ? b.nbc : nbc)
            setFirstText(b.firstText ? b.firstText : firstText)
            setSecondText(b.secondText ? b.secondText : secondText)
            // setThirdText(b.thirdText ? b.thirdText : thirdText)
        }
    }, [])
    

  return (
    <div className='sign__container'>
        <form className='form'>
            <h1>Numéro de Commande et Refs</h1>
                    
            <Link to='/fullinfo' className='before__btn' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
            </Link> 
            
            <div className='input__container'>
                <input type='number' name='commandeNum' id='commandeNum' className='input' placeholder=' ' onChange={(e) => setCommandeNum(parseInt((e.target.value)))} value={commandeNum} required='true' />
                <label htmlFor='commandeNum'>Numéro de Commande</label>  
            </div>

            <div className='input__container'>
                <input type='number' name='devis' id='devis' className='input' placeholder=' ' onChange={(e) => setDevis(parseInt(e.target.value))} value={devis} />
                <label htmlFor='devis'>Numéro de Devis</label>  
            </div>
            
            <div className='input__container'>
                <input type='number' name='factureNumber' id='factureNumber' className='input' placeholder=' ' onChange={(e) => setFactureNumber(e.target.value)} value={factureNumber} />
                <label htmlFor='factureNumber'>Numéro de Facture</label>  
            </div>

            <div className='input__container'>
                <input type='date' name='date' id='date' className='input' placeholder=' ' onChange={(e) => setDate(e.target.value)} value={date} />
                <label htmlFor='date'>Date</label>  
            </div>

            <div className='input__container'>
                <input type='number' name='nbc' id='nbc' className='input' placeholder=' ' onChange={(e) => setNbc(parseInt(e.target.value))} value={nbc} />
                <label htmlFor='nbc'>N° BC</label>  
            </div>
            
            <div className='input__container'>
                <input type='text' name='refs' id='refs' className='input' placeholder=' ' onChange={(e) => setRefs(e.target.value)} value={refs} />
                <label htmlFor='refs'>Réfs</label>  
            </div>
            
            <div className='input__container'>
                <textarea type='textarea' className='input' placeholder=' ' cols="30" rows="5" name='firstText' id='firstText' onChange={(e) => setFirstText(e.target.value)} value={firstText}></textarea>
                <label htmlFor='firstText'>Text de Facture</label>   
            </div>

            <div className='input__container'>
                <textarea type='textarea' className='input' placeholder=' ' cols="30" rows="5" name='secondText' id='secondText' onChange={(e) => setSecondText(e.target.value)} value={secondText}></textarea>
                <label htmlFor='secondText'>Text de Devis</label>  
            </div>

            <div className='form__bottom admin'>
                <Link to='/downloadpage' onClick={handleFinish}>Finir</Link>
            </div>

        </form>
    </div>
  )
}

export default LastInfo