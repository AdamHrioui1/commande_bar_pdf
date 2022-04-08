import React, { useState, useEffect } from 'react'
import './ClientInfo.css'
import { Link } from 'react-router-dom'

function LastInfo() {

  const [commandeNum, setCommandeNum] = useState()
  const [date, setDate] = useState()
  const [formatDate, setFormatDate] = useState('')
  const [refs, setRefs] = useState()
  const [firstText, setFirstText] = useState('This is your first text here...')
  const [secondText, setSecondText] = useState('This is your second text here...')

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

        console.log(formatDate)

        const last__info = {
            commandeNum: commandeNum,
            date: date,
            formatDate: formate__date(date),
            refs: refs,
            firstText: firstText,
            secondText: secondText,
        }

        localStorage.setItem('last info', JSON.stringify(last__info))
    }

    const clearStroge = () => {
        localStorage.clear()
    }

    var b = JSON.parse(localStorage.getItem('last info'))
    console.log(b)

    useEffect(() => {
        if(b) {
            setCommandeNum(b.commandeNum ? b.commandeNum : commandeNum)
            setDate(b.date ? b.date : date)
            setFormatDate(b.formatDate ? b.formatDate : formatDate)
            setRefs(b.refs ? b.refs : refs)
            setFirstText(b.firstText ? b.firstText : firstText)
            setSecondText(b.secondText ? b.secondText : secondText)
        }
    }, [])
    

  return (
    <div className='sign__container'>
        <form className='form'>
            <h1>Commande Number and Refs</h1>
                    
            <Link to='/fullinfo' className='before__btn' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
            </Link> 
            
            <div className='input__container'>
                <input type='number' name='commandeNum' id='commandeNum' className='input' placeholder=' ' onChange={(e) => setCommandeNum(parseInt((e.target.value)))} value={commandeNum} />
                <label htmlFor='commandeNum'>Commande Number</label>  
            </div>

            <div className='input__container'>
                <input type='date' name='date' id='date' className='input' placeholder=' ' onChange={(e) => setDate(e.target.value)} value={date} />
                <label htmlFor='date'>Date</label>  
            </div>

            {/* <div className='input__container'>
                <input type='text' name='formatDate' id='formatDate' className='input' placeholder=' ' onChange={(e) => setFormatDate(e.target.value)} value={formatDate} />
                <label htmlFor='formatDate'>formatDate</label>  
            </div> */}
            
            <div className='input__container'>
                <input type='text' name='refs' id='refs' className='input' placeholder=' ' onChange={(e) => setRefs(e.target.value)} value={refs} />
                <label htmlFor='refs'>Refs</label>  
            </div>

            <div className='input__container'>
                <textarea type='textarea' className='input' placeholder=' ' cols="30" rows="5" name='firstText' id='firstText' onChange={(e) => setFirstText(e.target.value)} value={firstText}></textarea>
                <label htmlFor='firstText'>First Text</label>   
            </div>

            <div className='input__container'>
                <textarea type='textarea' className='input' placeholder=' ' cols="30" rows="5" name='secondText' id='secondText' onChange={(e) => setSecondText(e.target.value)} value={secondText}></textarea>
                <label htmlFor='secondText'>Second Text</label>  
            </div>

            <div className='form__bottom admin'>
                <Link to='/downloadpage' onClick={handleFinish}>Finish</Link>
            </div>

        </form>
    </div>
  )
}

export default LastInfo