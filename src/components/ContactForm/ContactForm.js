import { useState } from 'react'


const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='container-fluid'>
          <div className='row'>
          <div className='col' style={{textAlign: "center"}}>FORMULARIO DE COMPRA</div>
          </div>
          <form style={{marginBottom: "5rem"}} onSubmit={handleContactForm}>
          <div className="row">
            <div className="col">
            <label className='LabelContact'>Nombre:
              <input
                className=''
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            </div>
            <div class="col">
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            </div>
            <div class="col">
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            </div>
            <div className='col'>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <div className='col'>
              <button className='btn btn-success' style={{marginTop: "1rem"}} type='submit'>CARGAR DATOS</button>
            </div>
            
            </div>
          </div>
         </form>
        </div>
      )
}

export default ContactForm