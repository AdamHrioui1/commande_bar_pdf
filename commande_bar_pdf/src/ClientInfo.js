import React, { useState, useEffect } from 'react'
import './ClientInfo.css'
import { Link } from 'react-router-dom'

function ClientInfo() {

  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')

    const handleNext = () => {
        const client__info = {
            company: company,
            name: name,
            // ICE: ICE,
            phone: phone,
            address: address,
            city: city,
            email: email,
        }

        var a = localStorage.setItem('client info', JSON.stringify(client__info))
    }

    const clearStroge = () => {
        localStorage.clear()
    }

    var b = JSON.parse(localStorage.getItem('client info'))
    console.log(b)

    useEffect(() => {
        if(b) {
            setCompany(b.company ? b.company : company)
            setName(b.name ? b.name : name)
            // setICE(b.ICE ? b.ICE : ICE)
            setPhone(b.phone ? b.phone : phone)
            setAddress(b.address ? b.address : address)
            setCity(b.city ? b.city : city)
            setEmail(b.email ? b.email : email)
        }
    }, [])
    

  return (
    <div className='sign__container'>
        <form className='form'>
            <h1>Les Information de Client</h1>
            
            <div className='input__container'>
                <input type='text' name='company' id='company' className='input' placeholder=' ' onChange={(e) => setCompany(e.target.value)} value={company} />
                <label htmlFor='company'>Nom de Société</label>  
            </div>

            {/* <div className='input__container'>
                <input type='number' name='ice' id='ice' className='input' placeholder=' ' onChange={(e) => setICE(e.target.value)} value={ICE} />
                <label htmlFor='ice'>ICE</label>  
            </div> */}
            
            <div className='input__container'>
                <input type='text' name='name' id='name' className='input' placeholder=' ' onChange={(e) => setName(e.target.value)} value={name} />
                <label htmlFor='name'>Nom de Client</label>  
            </div>

            <div className='input__container'>
                <input type='phone' name='phone' id='phone' className='input' placeholder=' ' onChange={(e) => setPhone(e.target.value)} value={phone} />
                <label htmlFor='phone'>Téléphone</label>  
            </div>
            
            <div className='input__container'>
                <input type='text' name='address' id='address' className='input' placeholder=' ' onChange={(e) => setAddress(e.target.value)} value={address} />
                <label htmlFor='address'>Adresse</label>  
            </div>

            <div className='input__container'>
                <input type='text' name='city' id='city' className='input' placeholder=' ' onChange={(e) => setCity(e.target.value)} value={city} />
                <label htmlFor='city'>Ville</label>  
            </div>
            
            <div className='input__container'>
                <input type='text' name='email' id='email' className='input' placeholder=' ' onChange={(e) => setEmail(e.target.value)} value={email} />
                <label htmlFor='email'>Email</label>  
            </div>

            <div className='form__bottom admin'>
                <Link to='fullinfo' onClick={handleNext}>Suivant</Link>
            </div>

        </form>
    </div>
  )
}

export default ClientInfo