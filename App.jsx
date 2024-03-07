import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'



function App() {
  const [title, setTitle] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [date, setDate] = useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {title, name, phone, address, city, state, date })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  

  return (

    <div className='d-flex justify-content-center align-items-center bg-secondary w-500'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Title</strong>

            </label>

            <input
              type="text"
              placeholder='Enter Title'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setTitle(e.target.value)}
            />
            

          </div>

          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Name</strong>

            </label>

            <input
              type="text"
              placeholder='Enter Name'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
            />
            

          </div>

          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Phone NO</strong>

            </label>
            <input
              type="number"
              placeholder='Enter Phone NO'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setPhone(e.target.value)}
            />


          </div>

          <div className='mb-3'>
          <label htmlFor='email'>
              <strong>Address</strong>

            </label>
            <input
              type="text"
              placeholder='Enter Address'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>City</strong>

            </label>

            <input
              type="text"
              placeholder='Enter City'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setCity(e.target.value)}
            />
            

          </div>

          <div className='mb-3'>
          <label htmlFor='email'>
              <strong>State</strong>

            </label>
            <input
              type="text"
              placeholder='Enter State'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className='mb-3'>
          <label htmlFor='email'>
              <strong>Date</strong>

            </label>
            <input
              type="number"
              placeholder='Enter Date'
              autoComplete="off"
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Save

          </button>
          <p>Contact is saved</p>


        </form>

      </div>

    </div>

  )
    
  
}

export default App
