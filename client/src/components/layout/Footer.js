import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
   
  return (
    <div className='footer' style={{color:'while', padding:'25px', background: 'Linear-gradian(to right,#434343,#000000)'}}>
        <h4 className='text-center'>
            All Right Reserve &copy; Arsalan Ali
        </h4>
        <p className='text-center'>
          <Link to={'/about'} >About</Link>
          <Link to={'/contact'} >Contact</Link>
          <Link to={'/policy'} >Policy</Link>
        </p>
    </div>
  )
}

export default Footer