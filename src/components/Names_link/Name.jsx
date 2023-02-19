import React from 'react'
import { Link } from 'react-router-dom'
import './Name.scss'
export default function Name() {
  return (
    <div className='names'>
    <div><Link to='/ProMain'>Mening profilim </Link></div>
    <div><Link to='/Result'>Test natijalari</Link></div>
    <div><Link to='/Traning'>Treninglar</Link></div>
    <div><Link to='/Ends'>Mening rezume</Link></div>
    <div><Link to='/' className='me1'>Chiqish</Link></div>
      </div>
  )
}
