import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ClientInfo.css'
import './FullInfo.css'

function FullInfo() {
  const [table, setTable] = useState([])
  const [designation, setDesignation] = useState('')
  const [unity, setUnity] = useState('U')
  const [quantity, setQuantity] = useState()
  const [PUHT, setPUHT] = useState()
  const [total, setTotal] = useState(0)

  var info = localStorage.getItem('infos') !== null ? JSON.parse(localStorage.getItem('infos')) : []
  
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
  
  
  const handleAdd = () => {

        info.push({
            id: Math.floor(Math.random() * 1564) + Math.floor(Math.random() * 300254) + Math.floor(Math.random() * 55214) ,
            designation: designation,
            unity: unity,
            quantity: quantity,
            PUHT: PUHT,
            PTHT: quantity * PUHT
        })
        setTable(info)
        localStorage.setItem('infos', JSON.stringify(info))

        table.map(t => {
            total += t.PTHT
        })

        setTotal(total)
    }

  const handleUpdate = (id) => {
    var wantedElement = table.find(t => t.id === id)
    
    setDesignation(wantedElement.designation)
    setUnity(wantedElement.unity)
    setQuantity(wantedElement.quantity)
    setPUHT(wantedElement.PUHT)
    handleDelete(id)
  }

  const handleDelete = (id) => {
    var filtredElements = table.filter(t => t.id !== id)
    setTable(filtredElements)
    localStorage.setItem('infos', JSON.stringify(filtredElements))
  }

  return (
    <>
        <div className='full__info__container'>
            <form className='form'>
                <h1>Tous les Achats</h1>
                    
                <Link to='/' className='before__btn' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                </Link>            
            
                <div className='input__container'>
                    <textarea type='textarea' name='designation' id='designation' className='input' placeholder=' ' cols="30" rows="5"  onChange={e => setDesignation(e.target.value)} value={designation}></textarea>
                    <label htmlFor='contactText'>Désignation</label>  
                </div>
                
                <div className='input__container'>
                    <input type='text' name='unity' id='unity' className='input' placeholder=' ' onChange={e => setUnity(e.target.value)} value={unity} />
                    <label htmlFor='unity'>Unité</label>  
                </div>
                
                <div className='input__container'>
                    <input type='number' name='qunatity' id='qunatity' className='input' placeholder=' ' onChange={e => setQuantity(parseInt(e.target.value))} value={quantity} />
                    <label htmlFor='qunatity'>Quantité</label>  
                </div>
                
                <div className='input__container'>
                    <input type='number' name='PUHT' id='PUHT' className='input' placeholder=' ' onChange={e => setPUHT(parseInt(e.target.value))} value={PUHT} />
                    <label htmlFor='PUHT'>PU HT (dh)</label>  
                </div>

                <button className='button' onClick={handleAdd}>Ajouter</button>
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Designation</th>
                        <th>Unity</th>
                        <th>Quantity</th>
                        <th>PU HT (dh)</th>    
                        <th>PT HT (dh)</th>    
                        <th>Edite</th>    
                        <th>Delete</th>    
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
                                    <td>
                                        <span className='edite' onClick={() => handleUpdate(t.id)} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>
                                        </span>
                                    </td>
                                    <td>
                                        <span className='delete' onClick={() => handleDelete(t.id)}>&#10006;</span>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td colSpan="2" rowSpan='3' ></td>
                        <td colSpan="2"><strong>Total HT</strong></td>
                        <td>{total}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><strong>TVA 20%</strong></td>
                        <td>{total / 5} </td>
                    </tr>
                    <tr>
                        <td colSpan="2"><strong>Total TTC</strong></td>
                        <td><strong>{total + total / 5}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='full__info__container bottom'>  
            <div className='form__bottom admin width__auto'>
                <Link to='/lastinfo'>Suivant</Link>
            </div>
        </div>
    </>
  )
}

export default FullInfo